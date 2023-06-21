const express = require("express")
const router = express.Router();
const uefaLeague = require("../ulDetails")


//Create Route
router.post("/uefaLeague", async (req,res) => {
    console.log(req.body)
    const data = new uefaLeague(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"uefaLeague Details Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"uefaLeague Details Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/uefaLeague", async (req,res) => {
    try {
        const result = await uefaLeague.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"uefaLeague Details Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"uefaLeague Details Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})

//Get Single Record
router.get("/uefaLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await uefaLeague.findById(_id);
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
router.put("/uefaLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await uefaLeague.findByIdAndUpdate(_id,req.body,{new: true});
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
router.delete("/uefaLeague/:id", async (req,res) => {
    try {
        const _id = req.params.id
        const result = await uefaLeague.findByIdAndDelete(_id);
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