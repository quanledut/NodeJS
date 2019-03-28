const mongoose = require('mongoose');
var userInfoSchema = new mongoose.Schema({
    _id : mongoose.SchemaTypes.ObjectId,
    userID : {type: mongoose.Types.ObjectId, ref: 'User'},
    firstName : String,
    lastName : String,
    phoneNumber: String,
    phone2Number: String,
    email: {type: String, set: toLower},
    address: String
})

function toLower(string){
    string.toLowerCase();
}

mongoose.model('UserInfo',userInfoSchema)