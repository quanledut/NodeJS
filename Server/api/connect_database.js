var mongoose = require('mongoose');
var url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
mongoose.connect(url,{useNewUrlParser:true})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('Connection failed',err)
})

mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected');
})

mongoose.connection.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})