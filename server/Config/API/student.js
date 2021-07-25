const express = require('express');
const studentSchema = require('../DB/sign');

const router = express.Router();

router.post('/student', (req, res) => {
    studentSchema.findOne({number: '03'}, (err, user) => {
        const student = {
            'stdNum': user.number,
            'gender': user.gender,
            'date': user.date,
            'majaor': user.major,
            'subject1': subject1,
            'subject2': subject2,
            'subject3': subject3
        }
        res.json(student);
    });
})

module.exports = router;