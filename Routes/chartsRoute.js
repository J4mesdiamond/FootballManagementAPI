const express = require("express")
const chart = require("../chart")

const router = express.Router();

//Create Route
router.post("/chart", async (req,res) => {
    console.log(req.body)
    const data = new chart(req.body)
    const result = await data.save()

    if (!result) {
        res.json({
            status:"FAILED",
            message:"chart Not Registered Successfully"
        })
    } 
    else {
        res.json({
            status:"SUCCESS",
            message:"chart Registered Successfully",
            data:result
        })
    }
})

//Get records
router.get("/chart", async (req,res) => {
    try {
        const result = await chart.find()
        if (!result) {
            res.json({
                status:"FAILED",
                message:"chart Not Registered Successfully"
            })
        } 
        else {
            res.json({
                status:"SUCCESS",
                message:"chart Registered Successfully",
                data:result
            })
        }
    } catch (e) {
        console.log(e)
    }
})


module.exports = router