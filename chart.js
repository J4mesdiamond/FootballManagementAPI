const mongoose = require("mongoose")

const chartSchema = new mongoose.Schema({
    subject:{
        type:String,
        required:true
    },
    marks:{
        type:String,
        required:true
    }
})

const chart = new mongoose.model("chart" , chartSchema)

module.exports = chart;