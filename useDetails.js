const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
    {
        fname: String,
        lname: String, 
        uname: String, 
        email: { type: String, unique: true }, 
        position: String, 
        clubcode: String, 
        pass: String, 
        conpass: String,
        data2: {
            field1: { type: String },
            field2: { type: Number },
        },
    },
    {
        collection: "UserInfo",
    }
);
mongoose.model("UserInfo", UserDetailsScehma);