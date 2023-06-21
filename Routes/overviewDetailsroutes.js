const express = require("express")
const router = express.Router();
const overviewDetails = require("../overviewDetails")


//Create Route
router.post("/overviewDetails", async (req,res) => {
    console.log(req.body)
    const data = new overviewDetails(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"Staff Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"Staff Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/overviewDetails", async (req,res) => {
    try {
        const result = await overviewDetails.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"Staff Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"Staff Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/overviewDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await overviewDetails.findById(_id);
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
router.put("/overviewDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await overviewDetails.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/overviewDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await overviewDetails.findByIdAndDelete(_id);
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