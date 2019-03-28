const mongoose = require('mongoose');
require('dotenv');


var dbURL = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(dbURL,{useNewUrlParser:true});
mongoose.connection.on('connected',()=>{
    console.log('Connected to MongoDB');
})
mongoose.connection.on('disconnected',()=>{
    console.log('Disconnected Database');
})

require('../model/user/user');
require('../model/user/userInfo');