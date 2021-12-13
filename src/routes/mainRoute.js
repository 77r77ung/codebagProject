var express = require('express');
var router = express.Router();

const questionController = require('../controllers/questionController')

// main(question 제목/내용)
router.get('/', questionController.listQuestion);

module.exports = router;