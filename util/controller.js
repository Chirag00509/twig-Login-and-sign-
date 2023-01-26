const signup = require('../models/signup');

async function insertData(username, email, password){
    await signup.create({username, email, password});
}

module.exports = insertData;