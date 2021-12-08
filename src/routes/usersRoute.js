var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

// 회원가입
router.post('/signup', usersController.signUp);

// 회원가입 페이지
router.get('/signup', usersController.signUpPage);

// 로그인
router.post('/signin', usersController.signIn);

// 로그인 페이지
router.get('/signin', usersController.signInPage);

// 로그아웃
router.get('/logout', usersController.logout);

// 메인
module.exports = router;