const express = require("express")
const router = express.Router();
const results = require("../resultDetails")


//Create Route
router.post("/result", async (req,res) => {
    console.log(req.body)
    const data = new results(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"result Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"result Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/result", async (req,res) => {
    try {
        const result = await results.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"result Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"result Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/result/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await results.findById(_id);
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
router.put("/result/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await results.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/result/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await results.findByIdAndDelete(_id);
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