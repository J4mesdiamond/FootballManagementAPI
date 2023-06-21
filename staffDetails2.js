const mongoose = require("mongoose")

const staffDetailsSchema = new mongoose.Schema({
    staffName:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        required: true,
        unique:[true, "This role has been taken"],
    },
    authLevel:{
        type:Number,
        required:true
    },
    staffCOB:{
        type:String,
        required:true
    },
    staffDOB:{
        type:String,
        required:true
    },
    staffSalary:{
        type:String,
        required:true
    },
    staffPC:{
        type:String,
        required:true
    },
    staffCSD:{
        type:String,
        required:true
    },
    staffCED:{
        type:String,
        required:true
    },
    staffStatus:{
        type:String,
        required:true
    },
    staffPT:{
        type:String,
        required:true
    },
})

const staffDetails = new mongoose.model("staffDetails" , staffDetailsSchema)

module.exports = staffDetails;