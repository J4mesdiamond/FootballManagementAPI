const express = require("express")
const router = express.Router();
const premierLeague = require("../plDetails")


//Create Route
router.post("/premierLeague", async (req,res) => {
    console.log(req.body)
    const data = new premierLeague(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"premierLeague Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"premierLeague Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/premierLeague", async (req,res) => {
    try {
        const result = await premierLeague.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"premierLeague Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"premierLeague Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/premierLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await premierLeague.findById(_id);
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
router.put("/premierLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await premierLeague.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/premierLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await premierLeague.findByIdAndDelete(_id);
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