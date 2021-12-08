var express = require('express');
var router = express.Router();
const questionController = require('../controllers/questionController')

/* Question 추가 */
router.post('/addquestion', questionController.addQuestion);

/* Question 수정 */
router.patch('/updatequestion/:question_uid', questionController.updateQuestion);


/* Question 삭제 */
router.delete('/deletequestion/:question_uid', questionController.deleteQuestion);

/* Question 리스트 보기*/
// router.get('/listQuestion/:question_uid', questionController.listQuestion);

/* Question 상세보기 */
router.get('/detailquestion/:question_uid', questionController.detailQuestion);

module.exports = router;