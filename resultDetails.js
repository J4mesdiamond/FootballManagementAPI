const mongoose = require("mongoose")

const resultDetailsSchema = new mongoose.Schema({
    date:{
        type:String,
        required: true
    },
    team:{
        type:String,
        required:true
    },
    score:{
        type:String,
        required:false
    }
})

const resultDetails = new mongoose.model("resultDetails" , resultDetailsSchema)

module.exports = resultDetails;