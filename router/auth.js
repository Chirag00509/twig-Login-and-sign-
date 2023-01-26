const express = require('express');
const router = express.Router();
const insertData = require('../util/controller');
const signup = require('../models/signup');

router.get('/signup', function(req, res){
    res.render('signup', {
    })
});

router.get('/login', function(req, res){
    res.render('login', {
    })
});

router.post('/signup', async function(req, res){
    try{
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const signup = await insertData(username, email, password)
        .then(()=>{
            res.status(201).json({
                message : "Data Created",
            })
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            error : err,
        })
    }
})

module.exports = router;