// 메인
exports.listQuestion = 'select * from question'

// 게시글 작성
exports.addQuestion = 'insert into question(question_uid, question_title, question_content, question_date, views, like_count, users_users_uid) values(?, ?, ?, ?, ?, ?, ?)'

// 게시글 수정
exports.updateQuestion = 'update question set question_title=?, question_content=?, question_date=? where question_uid=?'

// 게시글 삭제
exports.deleteQuestion = 'delete from question where question_uid=?'

// 상세 정보
exports.detailQuestion = 'select question_uid, question_title, question_content, question_date, views, like_count, users_users_uid from question where question_uid=?'
