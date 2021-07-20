const express = require('express');
const router = express.Router();
const userSchema = require('../Config/DB/sign.js');

router.get('/student/record', (req, res) => {
    userSchema.findOne({studentNumber: '01'}, (err, user) => {
        console.log(user);
        res.json(user);
    });
})

module.exports = router;