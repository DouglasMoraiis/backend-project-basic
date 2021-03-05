const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    director:{
        type: String,
        required: true,
    },
    genre:{
        type: String,
        required: true,
    },  
    synopsis:{
        type: String,
        required: true,
    },
    duration:{
        type: String
    }
})

module.exports = mongoose.model('Movie', MovieSchema)