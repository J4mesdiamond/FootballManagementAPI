const express = require("express")
const staff = require("../staffDetails")

const router = express.Router();

//Create Route
router.post("/staff", async (req,res) => {
    console.log(req.body)
    const data = new staff(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"Staff Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"Staff Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/staff", async (req,res) => {
    try {
        const result = await staff.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"Staff Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"Staff Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/staff/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await staff.findById(_id);
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
router.put("/staff/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await staff.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/staff/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await staff.findByIdAndDelete(_id);
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