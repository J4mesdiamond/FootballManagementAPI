const mongoose = require("mongoose")

const budgetDetailsSchema = new mongoose.Schema({
    budget:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required:true
    }
})

const budgetDetails = new mongoose.model("budgetDetails" , budgetDetailsSchema)

module.exports = budgetDetails;