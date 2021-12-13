var AnswerService = require('../services/answerService')
const pool = require('../../database/codebag_db')

exports.addAnswer = async(req, res) => {
    const {answer_content, answer_date, like_count, question_question_uid, users_users_uid} = req.body;
    const {answer_uid} = req.params;

    let session = req.session.users_uid;
    try{
        if(session != Null){
            await AnswerService.addAnswer(answer_content, answer_date, like_count, question_question_uid, users_users_uid, answer_uid);
        }else{
            return res.send(`<script type="text/javascript">
                alert("로그인 후 작성해주세요."); 
                location.href='/';
                </script>`);
        }
        return res.redirect('/');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addAnswerPage = async(req, res) => {
    try{
        const session = req.session.users_uid
        return res.render('main', {
            page:'./answer/addanswer',
            session:session
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateAnswer = async (req, res) => {
    let {answer_content, answer_date} = req.body;
    let {answer_uid} = req.params;
    try{
        await AnswerService.updateAnswer(answer_content, answer_date, answer_uid)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateAnswerPage = async (req, res) => {
    const { answer_uid } = req.params
    try{
        let update_info = await answerService.detailAnswer(answer_uid)
        let session = req.session.users_uid
        return res.render('mian', {
            page:'./answer/updateanswer',
            session:session,
            update_info:update_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.deleteAnswer = async (req, res) => {
    let { answer_uid } = req.params
    try{
        await answerService.deleteAnswer(answer_uid)
        return res.redirect('/' + req.session.users_uid)
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listAnswer = async (req, res) => {
    try{
        let Answer_info = await AnswerService.listAnswer();
        let users_nickname = req.session.users_nickname;
        console.log(users_nickname)
        return res.render('main', {
            page: './Answer/listAnswer',
            session: users_nickname,
            Answer_info: Answer_info,
            users_nickname : users_nickname
        })
    }catch(err){
        return res.status(500).json(err);
    }
}
