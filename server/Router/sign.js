const express = require('express');
const crypto = require('crypto');
const passport = require('../Config/passport');
const studentSchema = require('../Config/DB/sign');
const router = express.Router();

const jwt = require('jsonwebtoken');
require("dotenv").config();

// js function
const generateAccessTokenUsingSecretKey = (nickname) => {
    return jwt.sign({ nickname }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};

const generateRefreshTokenUsingSecretKey = (nickname) => {
    return jwt.sign({ nickname }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "15m",
    });
};

const authenticateAccessToken = (req, res, next) => {
    // let accessToken = req.header["authroization"];
    // 이런 식으로 token에 직접 접근하는 것 같은데 잘 모르겠다. 
    let accessToken = req.cookies.at;
    console.log(accessToken);

    if (!accessToken) {
        console.log('not exist accessToken, start reissueAcccessTokenUsingRefreshToken');
        if(!reissueAcccessTokenUsingRefreshToken(req, res, next)) res.render('login');
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            console.log('jwt verify error!');
            return res.sendStatus(403);
        }
        console.log('Exist accessToken');
        next();
    });
};

const reissueAcccessTokenUsingRefreshToken = (req, res, next) => {
    console.log('start reissueAcccessTokenUsingRefreshToken');
    let refreshToken = req.cookies.rt;
    if (!refreshToken) return false;

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (error, user) => {
            if (error) return res.sendStatus(403);
            const accessToken = generateAccessTokenUsingSecretKey(user.nickname);
            res.cookie('at', accessToken, { maxAge: 60 * 5 * 1000});
            console.log('Success accessToken using refreshToken');
            return true;
        }
    );
}

//cookie-session
var isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/signIn');
}

router.get('/signIn', (req, res) => {
    if (req.user !== undefined)
        res.redirect('/');
    else {
        res.render('signIn');
    }
})

router.post('/signIn', (req, res) => {
    const stdNum = req.body.stdNum;
    const pw = req.body.password;

    studentSchema.findOne({ number: stdNum }, (err, user) => {
        if (err) console.log(err);
        if (user && user.number == stdNum) {
            if (user.password == pw) {
                console.log('로그인 성공');
                // 토큰 지급
                let accessToken = generateAccessTokenUsingSecretKey(user.number);
                let refreshToken = generateRefreshTokenUsingSecretKey(user.number);
                res.cookie('at', accessToken, { maxAge: 60 * 5 * 1000}); // 5분
                res.cookie('rt', refreshToken, { maxAge: 60 * 60 * 12 * 1000}); // 12시간
                console.log('토근 지급 성공');
                res.redirect('/');
            } else {
                console.log('비밀번호가 일치하지 않습니다.');
                res.redirect('/signIn');
            }
        } else {
            console.log('등록되지 않은 유저입니다.');
            res.redirect('/signIn');
        }
    })
})

// router.post('/signIn', passport.authenticate('local', { failureRedirect: '/signIn', failureFlash: true }), (req, res) => {
//     res.redirect('/');
// });

router.get('/signUp', (req, res) => {
    res.render('signUp');
});

router.post('/signUp', (req, res) => {
    const stdNum = req.body.stdNum;
    const pw = req.body.password;
    const confirmPw = req.body.cofirmPassword;
    studentSchema.findOne({ number: stdNum }, (err, user) => {
        if (err) console.log(err);
        if (user == null) {
            if (pw == confirmPw) {
                var newUser = new studentSchema({ number: stdNum, password: pw });
                newUser.save((err, result) => {
                    if (err) console.log(err);
                    console.log(result);
                });
                res.redirect('/');
            }
            else {
                console.log('비밀번호가 일치하지 않습니다.');
                res.redirect('/signUp');
            }
        }
        else {
            console.log('이미 존재하는 아이디입니다.');
            res.redirect('/signUp');
        }
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

// access token 유효성 확인을 위한 예시 요청
router.get("/user", authenticateAccessToken, (req, res) => {
    res.redirect('/');
});

module.exports = router;