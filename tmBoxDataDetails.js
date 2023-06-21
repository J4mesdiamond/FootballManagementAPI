const mongoose = require("mongoose")

const tmBoxDataDetailsSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required: true,
    },
    seconName:{
        type:String,
        required:true
    },
    playerStatus:{
        type:String,
        required:true
    },
    team:{
        type:String,
        required:true
    },
    secondate:{
        type:String,
        required:true
    }
})

const tmBoxDataDetails = new mongoose.model("tmBoxDataDetails" , tmBoxDataDetailsSchema)

module.exports = tmBoxDataDetails;