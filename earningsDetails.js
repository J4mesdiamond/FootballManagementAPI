const mongoose = require("mongoose")

const earnDetailsSchema = new mongoose.Schema({
    earning:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required:true
    },
    data2: {
        field1:{ type: String },
        field2:{ type: Number },
    }
})

const earnDetails = new mongoose.model("earnDetails" , earnDetailsSchema)

module.exports = earnDetails;