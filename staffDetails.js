const mongoose = require("mongoose")
const validate = require("validator")


const staffSchema = new mongoose.Schema({
    staffName:{
        type:String,
        required: true
    },
    role:{
        type:String,
        required: true,
        unique:[true, "This role has been taken"],
    },
    level:{
        type:Number,
        required: true
    },
    details:{
        type:String,
    }
})

const staff = new mongoose.model("staff" , staffSchema)

module.exports = staff;