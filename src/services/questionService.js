var pool = require('../../database/codebag_db');
var questionQuery = require('../query/questionQuery');


exports.addQuestion = async(question_uid, question_title, question_content, question_date, views, like_count, users_users_uid) => {
    try{
        let addQuestion = await pool.query(questionQuery.addQuestion, [question_uid, question_title, question_content, question_date, views, like_count, users_users_uid])
        return addQuestion[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.updateQuestion = async(question_title, question_content, question_date, question_uid) => {
    try{
        let updateQuestion = await pool.query(questionQuery.updatequestion, [question_title, question_content, question_date, question_uid])
        return updateQuestion[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteQuestion = async(question_uid) => {
    try{
        let deleteQuestion = await pool.query(questionQuery.deleteQuestion, [question_uid])
        return deleteQuestion[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.listQuestion = async() => {
    try{
        let list = await pool.query(questionQuery.listQuestion)
        return list[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.detailQuestion = async(question_uid) => {
    try{
        let detailQuestion = await pool.query(questionQuery.detailQuestion, [question_uid])
        return detailQuestion[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}