var pool = require('../../database/codebag_db');
var usersQuery = require('../query/usersQuery');

exports.signUp = async(users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre) => {
    try{
        let signUp = await pool.query(usersQuery.signUp, [users_uid, users_password, users_nickname, users_tel, users_email, users_job, users_genre])
        return signUp[0]
    }catch(err){
        if(err.errno == 1062) return 1062
        console.log(err)
        throw Error(err)
    }
}

exports.signIn = async(users_uid, users_password) => {
    try{
        let signIn = await pool.query(usersQuery.signIn, [users_uid, users_password])
        return signIn[0]
    }catch(err){
        if(err.errno == 1062) return 1062
        console.log(err)
        throw Error(err)
    }
}

exports.myPage = async(users_uid) => {
    try{
        let myPage = await pool.query(usersQuery.myPage, [users_uid])
        return myPage[0]
    }catch(err){
        throw Error(err)
    }
}