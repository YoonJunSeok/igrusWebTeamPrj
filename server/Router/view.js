const express = require('express');
const router = express.Router();
const studentSchema = require('../Config/DB/sign.js');

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/studentInfo', (req, res) => {
    res.render('studentAdd');
})

router.post('/studentInfo', (req, res) => {
    studentSchema.find((err, user) => {
        if (err) console.log(err);
        console.log(user);
        res.send(user);
    })
})

router.post('/studentInfo', (req, res) => {
    const studentNumber = req.body.stdNum;
    const studentName = req.body.stdName;
    const studentGender = req.body.stdGender;
    const studentBirth = req.body.stdBirth;
    const studentMajor = req.body.stdMajor;
    const studentSubject1 = req.body.subject1;
    const studentSubject2 = req.body.subject2;
    const studentSubject3 = req.body.subject3;

    // studentNumber로 회원인지 확인하고 정보를 등록한다.
    studentSchema.findOne({number: studentNumber}, (err, user) => {
        if (err) console.log(err);
        if (studentNumber == user.number) {
            var user = {number: user.number};
            var updateUser = {
                $set: {number: studentNumber,
                name: studentName,
                gender: studentGender,
                birth: studentBirth,
                major: studentMajor,
                subject1: studentSubject1,
                subject2: studentSubject2,
                subject3: studentSubject3}
            };
            // test not yet
            studentSchema.updateOne(user, updateUser, (err, result) => {
                if (err) console.log(err);
            });
            res.redirect('/');
        }
    })

})

router.get('/showScore', (req, res) => {
    res.render('showScore');
})

router.get('studentList', (req, res) => {
    res.render('studentList');
})

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

module.exports = router;