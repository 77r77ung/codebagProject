var express = require('express');
var router = express.Router();

const answerController = require('../controllers/answerController')

//answer 추가
router.post('/addAnswer/:question_question_uid', answerController.addAnswer);
router.get('/addAnswer/', answerController.addAnswer);

//answer 수정
router.patch('/updateAnswer/:answer_uid', answerController.updateAnswer);
router.get('/updateAnswer/:answer_uid', answerController.updateAnswer);

//answer 삭제
router.delete('/deleteAnswer/:answer_uid', answerController.deleteAnswer);


module.exports = router;