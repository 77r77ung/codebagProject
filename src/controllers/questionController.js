var questionService = require('../services/questionService')
const pool = require('../../database/codebag_db')

exports.addQuestion = async(req, res) => {
    const {question_title, question_content, question_date, views, like_count, users_users_uid} = req.body;
    const {question_uid} = req.params;
    try{
        await questionService.addQuestion(question_uid, question_title, question_content, question_date, views, like_count, users_users_uid);
        return res.redirect('/');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateQuestion = async(req, res) => {
    let {question_title, question_content, question_date} = req.body;
    let {question_uid} = req.params;
    try{
        await questionService.updateQuestion(question_title, question_content, question_date, question_uid)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.deleteQuestion = async (req, res) => {
    let {question_uid} = req.params
    try{
        await questionService.deleteQuestion(question_uid)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listQuestion = async (req, res) => {
    try{
        let question_info = await questionService.listQuestion();
        let session = req.session.users_uid;
        let users_nickname = req.session.users_nickname;
        console.log(users_nickname)
        return res.render('main', {
            page: './question/listquestion',
            session: session,
            question_info: question_info,
            users_nickname : users_nickname
        })
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.detailQuestion = async (req, res) => {
    let {question_uid} = req.params

    try{
        let detail_info = await questionService.detailQuestion(question_uid)
        let session = req.session.users_uid
        return res.render('main', {
            page:'./question/detailquestion',
            session: session,
            detail_info: detail_info
        })
    }catch(err){
        return res.status(500).json(err);
    }
}
