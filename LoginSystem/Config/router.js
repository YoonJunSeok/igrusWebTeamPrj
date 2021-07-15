const express = require('express');
const crypto = require('crypto');
const passport = require('./passport.js');
const userSchema = require('./DB/sign.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

// 
router.get('학생등록', (req, res) => {
    res.render('studentinfo');
})

router.get('성적확인', (req, res) => {
    res.render('성적확인페이지');
})

router.get('성적관리', (req, res) => {
    res.render('성적관리페이지');
})

router.get('학생리스트', (req, res) => {
    res.render('studentList');
})

// login start
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

router.post('/signIn', passport.authenticate('local', { failureRedirect: '/signIn', failureFlash: true }), (req, res) => {
    res.redirect('/');
});

router.get('/signUp', (req, res) => {
    res.render('signUp');
});

router.post('/signUp', (req, res) => {
    const stdNum = req.body.stdNum;
    const pw = req.body.password;
    const confirmPw = req.body.cofirmPassword;
    userSchema.findOne({ studentNumber: stdNum }, (err, user) => {
        if (err) console.log(err);
        if (user == null) {
            if (pw == confirmPw) {
                var newUser = new userSchema({ studentNumber: stdNum, password: pw });
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

// login end



module.exports = router;