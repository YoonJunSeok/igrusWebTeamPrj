const express = require('express');
const router = express.Router();
const studentSchema = require('../Config/DB/sign.js');

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

router.get('/studentInfo', (req, res) => {
    res.render('studentinfo');
})

router.post('/studentInfo', (req, res) => {
    console.log('start studentPost');
    const studentNumber = req.body.stdNum;
    const studentName = req.body.stdName;
    const studentGender = req.body.stdGender;
    const studentBirth = req.body.stdBirth;
    const studentPhoneNumber = req.body.studentPhone;
    const studentAddress = req.body.stdAddress;

    studentSchema.findOne({number: studentNumber}, (err, user) => {
        if (err) console.log(err);
        if (studentNumber == user.number) {
            var updateUser = new studentSchema({
                number: studentNumber,
                name: studentName,
                gender: studentGender,
                birth: studentBirth,
                phoneNumber: studentPhoneNumber,
                address: studentAddress
            });
            // test not yet
            studentSchema.updateOne(user, updateUser, (err, result) => {
                if (err) console.log(err);
                console.log(result);
            });
            
            res.redirect('/');
        }
    })
})

module.exports = router;