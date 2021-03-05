const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        maxlength: 50,
        required: true
    },
    birthDate:{
        type: Date,
        required: true,
    },  
    description:{
        type: String,
        maxlength: 250
    }
})

module.exports = mongoose.model('User', UserSchema)