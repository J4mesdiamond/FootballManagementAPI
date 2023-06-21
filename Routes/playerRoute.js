const express = require("express")
const player = require("../playerDetails")

const router = express.Router();

//Create Route
router.post("/player", async (req,res) => {
    console.log(req.body)
    const data = new player(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"Player Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"Player Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/player", async (req,res) => {
    try {
        const result = await player.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"Activity Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"Activity Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})



//Get Single Record
router.get("/player/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await player.findById(_id);
        if (!result) {
            res.json({
                status:"FAILED",
                message:"Record not Found on this ID"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"Records found",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Update Records
router.put("/player/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await player.findByIdAndUpdate(_id,req.body,{new: true});
        if (!result) {
            res.json({
                status: "FAILED",
                message: "Record not Edited..."
            })
        }
        else {
            res.json({
                status: "SUCCESS",
                message: "Record Edited successfully..."
            })
        }
    }
    catch (e) {
        res.send(e)
    }
})

//Delete Records
router.delete("/player/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await player.findByIdAndDelete(_id);
        if (!result) {
            res.json({
                status:"FAILED",
                message:"Record has not been Deleted Successfully..."
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"Record has been Deleted Successfully...",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})



module.exports = router