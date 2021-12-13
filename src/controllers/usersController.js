const { NotExtended } = require('http-errors');
const usersServices = require('../services/usersService');

exports.signIn = async(req, res) => {
    const { users_uid, users_password } = req.body;
    try{
        let signIn = await usersServices.signIn(users_uid, users_password);
        req.session.users_uid = signIn[0].users_uid;
        req.session.users_nickname = signIn[0].users_nickname;
        console.log("session : ",req.session.users_nickname)
        return res.redirect('/');
    }catch(err){
        res.send('<script type="text/javascript">alert("아이디 또는 비밀번호를 확인해주세요"); location.href="/users/signIn";</script>');
    }
}

exports.signInPage = async(req, res) => {
    try{
        const session = req.session.users_uid;
        return res.render('main', {
            page:'./users/signin',
            session:session
        })
    }catch(err){
        return res.status(500).json(err)
    }
}


exports.signUp = async(req, res) => {
    /* 회원가입에 필요한 정보를 받아오는 부분
    req= require / users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre을 추출해서 body에 넣어줌 */
    const {users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre} = req.body;
    try{
        let signUp = await usersServices.signUp(users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre)

        if(signUp == 1062){
            return res.send(`<script type="text/javascript">
                alert("이미 사용중인 아이디입니다."); 
                location.href='./signup';
                </script>`);
        }else{
            return res.redirect('/')
        }
    }catch(error){
        return res.status(500).json(error);
    }
}

exports.signUpPage = async(req, res) => {
    try{
        /* 회원가입 시 입력한 정보를 세션에 저장
        let user = req.session.id;
        res.render("ejs 파일 이름", {데이터 이름: 전송할 데이터});
        >> POST로 데이터 보낼 때 사용하는 코드이기 때문에 signUpPage 띄우는 코드에는 필요 없음!*/
        const session = req.session.users_uid;
        return res.render('main', {
            page: './users/signup', 
            session:session
        });
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.myPage = async (req, res) => {
    try{
        let session = req.session.users_uid;
        let mypage = await usersServices.myPage(session);
        return res.render('main', {
            page: './users/mypage',
            session: session,
            mypage: mypage
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.logout = async(req, res) =>{
    // 로그아웃 시 로그인 한 회원의 세션을 파괴
    if(req.session){
        console.log('로그아웃 처리');
        req.session.destroy(
            function(err){
                if(err){
                    console.log('세션 삭제시 에러');
                    return;
                }
                console.log('세션 삭제 성공');
                res.redirect('/');
            }
        );
    }else{
        console.log('로그인 안 되어 있음');
        res.redirect('/users/signin');
    }
}