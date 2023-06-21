const express = require("express")
const router = express.Router();
const faDetails = require("../faDetails") 


//Create Route
router.post("/faDetails", async (req,res) => {
    console.log(req.body)
    const data = new faDetails(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"faDetails Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"faDetails Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/faDetails", async (req,res) => {
    try {
        const result = await faDetails.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"faDetails Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"faDetails Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/faDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await faDetails.findById(_id);
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
router.put("/faDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await faDetails.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/faDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await faDetails.findByIdAndDelete(_id);
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