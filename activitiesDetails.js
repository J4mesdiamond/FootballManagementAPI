const mongoose = require("mongoose")

const activityDetailsSchema = new mongoose.Schema({
    date:{
        type:String,
        required: true
    },
    team:{
        type:String,
        required:true
    },
    fixtures:{
        type:String,
        required: true,
    },
    score:{
        type:String,
        required:false
    }
})

const activityDetails = new mongoose.model("activityDetails" , activityDetailsSchema)

module.exports = activityDetails;