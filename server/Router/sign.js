const express = require('express');
const crypto = require('crypto');
const passport = require('../Config/passport');
const studentSchema = require('../Config/DB/sign');
const router = express.Router();

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

module.exports = router;