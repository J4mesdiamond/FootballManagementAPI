const mongoose = require("mongoose")

const faDetailsSchema = new mongoose.Schema({
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

const faDetails = new mongoose.model("faDetails" , faDetailsSchema)

module.exports = faDetails;