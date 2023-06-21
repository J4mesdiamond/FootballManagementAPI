const express = require("express")
const router = express.Router();
const staffDetails = require("../staffDetails2")


//Create Route
router.post("/staffDetails", async (req,res) => {
    console.log(req.body)
    const data = new staffDetails(req.body)
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
router.get("/staffDetails", async (req,res) => {
    try {
        const result = await staffDetails.find()
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

//Update Records
router.put("/staffDetails/:id", async (req,res) => {
    try {
        const _id = req.params.id;
        const result = await staffDetails.findByIdAndUpdate(_id,req.body,{new: true});
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



module.exports = router