const express = require('express');
const crypto = require('crypto');
const passport = require('./passport.js');
const userSchema = require('./DB/sign.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

// 학생등록 = 학생 정보 등록인가?
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
    res.redirect('/signInTest');
}

router.get('/signInTest', (req, res) => {
    if (req.user !== undefined)
        res.redirect('/');
    else {
        res.render('signInTest');
    }
})

router.post('/signInTest', passport.authenticate('local', {failureRedirect: '/signIn', failureFlash: true}),  (req, res) => {
    res.redirect('/');
});

router.get('/signUpTest', (req, res) => {
    res.render('signUpTest');
});

router.post('/signUpTest', (req, res) => {
    const id = req.body.id;
    const pw = req.body.password;
    userSchema.findOne({name : id}, (err, user) => {
        if (err) console.log(err);
        if (user == null) {
            var newUser = new userSchema({name : id, password : pw});
            console.log('newUser : ' + newUser.password);
            newUser.save((err, result) => {
                if (err) console.log(err);
                console.log(result);
            });
            res.redirect('/');
        }
        else {
            console.log('이미 존재하는 아이디입니다.')
            res.redirect('/signUpTest')
        }
    })
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

// login end



module.exports = router;