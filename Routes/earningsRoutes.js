const express = require("express")
const router = express.Router();
const earn = require("../earningsDetails")


//Create Route
router.post("/earn", async (req,res) => {
    console.log(req.body)
    const data = new earn(req.body)
    const result = await data.save()
    
    if (!result) {
        res.json({
            status:"FAILED",
            message:"earn Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"earn Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/earn", async (req,res) => {
    try {
        const result = await earn.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"earn Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"earn Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})


//Get Single Record
router.get("/earn/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await earn.findById(_id);
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
router.put("/earn/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await earn.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/earn/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await earn.findByIdAndDelete(_id);
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