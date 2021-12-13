var AnswerService = require('../services/answerService')
const pool = require('../../database/codebag_db')

exports.addAnswer = async(req, res) => {
    const { answer_content } = req.body;
    const { question_question_uid } = req.params;

    try{
        let answer_uid = String(Math.random()*100000000000000000)
        let answer_date = new Date()
        let like_count = 0
        let users_users_uid = req.session.users_uid;

        await AnswerService.addAnswer(answer_uid, answer_content, answer_date, like_count, question_question_uid, users_users_uid);

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
        let update_info = await AnswerService.detailAnswer(answer_uid)
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
        await AnswerService.deleteAnswer(answer_uid)
        return res.redirect('/' + req.session.users_uid)
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listAnswer = async (req, res) => {
    try{
        let answer_info = await AnswerService.listAnswer();
        let users_nickname = req.session.users_nickname;
        console.log(users_nickname)
        return res.render('main', {
            page: './Answer/listAnswer',
            session: users_nickname,
            answer_info: answer_info,
            users_nickname : users_nickname
        })
    }catch(err){
        return res.status(500).json(err);
    }
}
