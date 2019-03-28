const mongoose = require('mongoose');
const User = mongoose.model('User');
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
        let isExistUsername = await User.findOne({username: req.body.username}).exec();
        if(isExistUsername) {
            setResponseData(req,200,{
                msg:'Username is exist',
                detail:'Tên đã tồn tại'
            })
        }
        else{
            try{
                user = new User(
                //     {
                //     username: req.body.username,
                //     password: req.body.password
                // }
                )
                user.username = req.body.username;
                user.password = req.body.password;
                let registerResult = user.save();
                if(registerResult) {
                    setResponseData(res,201,registerResult);
                }
            }
            catch(err){
                setResponseData(res,400,{
                    msg:'Register error',
                    detail:{err,registerResult}
                });
            }
        }
    }
}

module.exports = {
    getAllUser,
    register
};