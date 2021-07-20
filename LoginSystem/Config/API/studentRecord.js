const express = require('express');
const userSchema = require('./DB/sign.js');

const router = express.Router();

router.get('/student/record', (req, res) => {
    console.log(userSchema);
    res.json(userSchema);
})