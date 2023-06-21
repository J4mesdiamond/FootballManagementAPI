const mongoose = require("mongoose")

const plDetailsSchema = new mongoose.Schema({
    tableNo:{
        type:String,
        required: true
    },
    team:{
        type:String,
        required:true
    },
    points:{
        type:String,
        required:false
    }
})

const plDetails = new mongoose.model("plDetails" , plDetailsSchema)

module.exports = plDetails;