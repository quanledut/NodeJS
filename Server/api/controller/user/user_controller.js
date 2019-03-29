"use strict";
const mongoose = require("mongoose");
const User = mongoose.model("User");
const setResponseData = require('../../helper/setResponseData')

const getAllUser = (req,res) => {
    User.find({}).exec((err,user) => {
        if(user) {
            res.status(200);
            res.json(user);
        }
        if(err){
            res.status(400);
            res.json('Error');
        }
    })
}

const register = async (req,res) => {
    console.log(req.body);
    if(!req.body.username || !req.body.password){
        setResponseData(res,400,{
            msg:'Username and Password Required',
            detail:'Yêu cầu nhập tên và mật khẩu'
        })
    }
    else {
        try{
            let user = new User();
            user._id = new mongoose.Types.ObjectId();
            user.username = req.body.username;
            user.generateHash(req.body.password);
            let userResult = await user.save();
            setResponseData(res,201,userResult);
        }
        catch(err){
            setResponseData(res,400,{
                msg:'Register failed',
                detail:err
            })
        }  
    }
    
}

module.exports = {
    getAllUser,
    register
};