const mongoose = require("mongoose")

const overviewDetailsSchema = new mongoose.Schema({
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
    cash:{
        type:String,
        required:true
    },
    cashUsed:{
        type:String,
        required:true
    },
    secondate:{
        type:String,
        required:true
    }
})

const overviewDetails = new mongoose.model("overviewDetails" , overviewDetailsSchema)

module.exports = overviewDetails;