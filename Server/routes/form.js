const Form = require('../models/form');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.post('/user/form', async (req,res)=>{
    const form = new Form(req.body)
    try{
        await form.save();
        res.send("your details is saved. you will get your result after completion of this project ")
    }
    catch(e){
        res.status(400).send(e);
    }
})

module.exports =router;