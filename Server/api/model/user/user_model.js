
const mongoose = require('mongoose');
var crypto = require('crypto');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created_date: {type: Date, default: Date.now},
    created_user: {type: mongoose.Types.ObjectId, ref : 'User'},
    username: {type: String, required: true, unique: true, set: toLower},
    hash: {type:String, set: generateHash},
    salt: String
})

function toLower(string){
    return string.toLowerCase();
}

function generateHash(password){
    this.salt = crypto.randomBytes(8).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,process.env.algorithm).toString('hex');
}

userSchema.methods.validatePassword = (password) => {
    let hash = crypto.pbkdf2Sync(password,this.salt,1000,64,process.env.algorithm);
    return hash == this.hash;
}

mongoose.model('User',userSchema);