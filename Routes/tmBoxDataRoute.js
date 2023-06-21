const express = require("express")
const router = express.Router();
const tmBoxData = require("../tmBoxDataDetails")

//Create Route
router.post("/tmBoxData", async (req,res) => {
    console.log(req.body)
    const data = new tmBoxData(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"tmBoxData Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"tmBoxData Registered Successfully",
            data:result
        })
    }
})


//Get records
router.get("/tmBoxData", async (req,res) => {
    try {
        const result = await tmBoxData.find()
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


module.exports = router