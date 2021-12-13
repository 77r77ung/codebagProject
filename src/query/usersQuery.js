/* signIn(로그인), signUp(회원가입) */

// signUp
exports.signUp = 'insert into users (users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre) values(?, ?, ?, ?, ?, ?, ?)'

// signIn
exports.signIn = 'select * from users where users_uid=? and users_password=?'

//mypage
exports.myPage = 'select * from users where users_uid=?'