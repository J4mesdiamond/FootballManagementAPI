const express = require("express")
const router = express.Router();
const budget = require("../budgetDetails")


//Create Route
router.post("/budget", async (req,res) => {
    console.log(req.body)
    const data = new budget(req.body)
    const result = await data.save()
    
    if (!result) {
        res.json({
            status:"FAILED",
            message:"budget Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"budget Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/budget", async (req,res) => {
    try {
        const result = await budget.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"budget Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"budget Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})


//Get Single Record
router.get("/budget/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await budget.findById(_id);
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
router.put("/budget/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await budget.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/budget/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await budget.findByIdAndDelete(_id);
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