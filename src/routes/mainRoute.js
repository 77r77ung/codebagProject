var express = require('express');
var router = express.Router();

const questionController = require('../controllers/questionController')

// 책 정보
router.get('/', questionController.listQuestion);

module.exports = router;