var pool = require('../../database/codebag_db');
var answerQuery = require('../query/answerQuery');


exports.addAnswer = async(answer_uid, answer_content, answer_date, like_count, question_question_uid, users_users_uid) => {
    try{
        let addAnswer = await pool.query(answerQuery.addAnswer, [answer_uid, answer_content, answer_date, like_count, question_question_uid, users_users_uid])
        return addAnswer[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.updateAnswer = async(answer_content, answer_date, answer_uid) => {
    try{
        let updateAnswer = await pool.query(answerQuery.updateAnswer, [answer_content, answer_date, answer_uid])
        return updateAnswer[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.deleteAnswer = async(answer_uid) => {
    try{
        let deleteAnswer = await pool.query(answerQuery.deleteAnswer, [answer_uid])
        return deleteAnswer[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}

exports.listAnswer = async(question_question_uid) => {
    try{
        let list = await pool.query(answerQuery.listAnswer, [question_question_uid])
        return list[0]
    }catch(err){
        console.log(err)
        throw Error(err)
    }
}