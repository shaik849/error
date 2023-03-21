const mongoose = require('mongoose');
const {Schema} = mongoose

const appSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    file : {
        data: String,
        contentType: String
    }
})

module.exports = mongoose.model('app', appSchema)