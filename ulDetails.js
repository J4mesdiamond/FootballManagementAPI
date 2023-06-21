const mongoose = require("mongoose")

const ulDetailsSchema = new mongoose.Schema({
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

const ulDetails = new mongoose.model("ulDetails" , ulDetailsSchema)

module.exports = ulDetails;