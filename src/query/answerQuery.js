// 답변 작성
exports.addAnswer = 'insert into answer(answer_uid, answer_content, answer_date, like_count, question_question_uid, users_users_uid) values(?, ?, ?, ?, ?, ?)'

// 답변 수정
exports.updateAnswer = 'update answer set answer_content=?, answer_date=? where answer_uid=?'

// 답변 삭제
exports.deleteAnswer = 'delete from answer where answer_uid=?'

// 답변 보기
exports.listAnswer = 'select * from answer where question_question_uid=?'