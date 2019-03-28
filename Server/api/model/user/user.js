const mongoose = require('mongoose');
var crypto = require('crypto');
let userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    created_date: {type: Date, default: Date.now},
    created_user: {type: mongoose.Types.ObjectId, ref : 'User'},
    username: {type: string, required: true, unique: true, set: toLower},
    hash: {string, set: generateHash},
    salt: string
})

toLower = (string) => {
    string.toLowerCase();
}

userSchema.method.generateHash = (password) => {
    this.salt = crypto.randomBytes(8).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,process.env.algorithm)
}

userSchema.methods.validatePassword = (password) => {
    let hash = crypto.pbkdf2Sync(password,this.salt,1000,64,process.env.algorithm);
    return hash == this.hash;
}

mongoose.Model('User',userSchema);