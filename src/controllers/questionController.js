var questionService = require('../services/questionService')
var answerService = require('../services/answerService')
const pool = require('../../database/codebag_db')

exports.detail = async (req, res) => {
    const { question_uid } = req.params

    try{
        let question_info = await questionService.detailQuestion(question_uid)
        // let answer_info = await answerService.listAnswer(question_qeustion_uid)
        let session = req.session.users_nickname

        return res.render('main', {
            page: './question/detailquestion',
            session: session,
            question_info: question_info,
            // answer_info: answer_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.addQuestion = async(req, res) => {
    const { question_title, question_content } = req.body;

    try{
        let question_uid = String(Math.random()*100000000000000000)
        let question_date = new Date()
        let views = 0
        let like_count = 0
        let users_users_uid = req.session.users_uid;

        await questionService.addQuestion(question_uid, question_title, question_content, question_date, views, like_count, users_users_uid);

        return res.redirect('/');
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.addQuestionPage = async(req, res) => {
    try{
        let session = req.session.users_uids
        return res.render('main', {
            page:'./question/addquestion',
            session:session
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.updateQuestion = async (req, res) => {
    let {question_title, question_content, question_date} = req.body;
    let {question_uid} = req.params;
    try{
        await questionService.updateQuestion(question_title, question_content, question_date, question_uid)
        return res.redirect('/')
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.updateQuestionPage = async (req, res) => {
    const { question_uid } = req.params
    try{
        let update_info = await questionService.detailQuestion(question_uid)
        let session = req.session.users_uid
        return res.render('mian', {
            page:'./question/updateQuestion',
            session:session,
            update_info:update_info
        })
    }catch(err){
        return res.status(500).json(err)
    }
}

exports.deleteQuestion = async (req, res) => {
    let { question_uid } = req.params
    try{
        await questionService.deleteQuestion(question_uid)
        return res.redirect('/' + req.session.users_uid)
    }catch(err){
        return res.status(500).json(err);
    }
}

exports.listQuestion = async (req, res) => {
    try{
        let question_info = await questionService.listQuestion();
        let session = req.session.users_nickname;
        console.log(question_info);
        return res.render('main', {
            page: './question/listquestion',
            session: session,
            question_info: question_info
        })
    }catch(err){
        return res.status(500).json(err);
    }
}