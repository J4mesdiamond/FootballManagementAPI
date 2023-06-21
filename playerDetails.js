const mongoose = require("mongoose")
const validate = require("validator")

const playerSchema = new mongoose.Schema({
    playerName:{
        type:String,
        required: true
    },
    position:{
        type:String,
        required: true,
    },
    goals:{
        type:Number,
        required: true
    },
    assists:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true
    }
})

const player = new mongoose.model("player" , playerSchema)

module.exports = player;