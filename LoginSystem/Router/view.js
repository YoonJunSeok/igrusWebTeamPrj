const express = require('express');
const router = express.Router();

router.get('/view', (req, res) => {
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

module.exports = router;
