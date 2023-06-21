const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const staffRoutes = require("./Routes/staffRoute")
const playerRoutes = require("./Routes/playerRoute") 
const staffDetails = require("./Routes/staffDetailsRoutes")
const overviewDetails = require("./Routes/overviewDetailsroutes")
const activity = require("./Routes/activitesRoutes")
const tmBoxData = require("./Routes/tmBoxDataRoute")
const chart = require("./Routes/chartsRoute")
const results = require("./Routes/resultRoute")
const premierLeague = require("./Routes/plRoutes")
const uefaLeague = require("./Routes/ulRoutes")
const faDetails = require("./Routes/faRoutes")
const budget = require("./Routes/budgetRoutes")
const earn = require("./Routes/earningsRoutes")

const JWT_SECRET = 
    "jhgvbndjvibu76789oeikrjntu890987y3h4jrtog987yh5jty9h8yh34ur8t90";

mongoose
    .connect(
        "mongodb+srv://footballAPI:ufuoma123@footballapi.hqqfyac.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connection Successfull"))
    .catch((err) => {
        console.log(err);
    });

require("./useDetails");

const User=mongoose.model("UserInfo")

//Register
app.post("/register",async(req,res)=>{
    const {fname, lname, uname, email, position, clubcode, pass, conpass,data2} = req.body;

    const encryptedPassword = await bcrypt.hash(pass, 10)
    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) {
            return res.send({ error: "User Exists" });
        }
        await User.create({
            fname,
            lname,
            uname,
            email,
            position,
            clubcode,
            pass:encryptedPassword,
            conpass,
            data2
        });
        res.send({ status: "ok" });
    } catch (error) {
        res.send({ status: "error"})
    }
});

//Log-In
app.post("/login-user", async (req, res) => {
    const { email, pass, clubcode } = req.body;

    const user = await User.findOne({ email, clubcode });
    if (!user) {
        return res.json({ error: "User Not Found" });
    }
    if (await bcrypt.compare(pass, user.pass)) {
        const token = jwt.sign({email:user.email}, JWT_SECRET);

        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else{
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "error", error: "Invalid Password" });
});

// userdata
app.post("/userData", async (req, res) => {
const { token } = req.body;
try {
    const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
            return "token expired";
        }
        return res;
    });
    
    if (user == "token expired") {
        return res.send({ status: "error", data: "token expired" });
    }
    const useremail = user.email;
    User.findOne({ email: useremail })
        .then((data) => {
            res.send({ status: "ok", data: data });
        })
        .catch((error) => {
            res.send({ status: "error", data: error });
        });
    } catch (error) {}
});


app.use(express.json())
app.use(staffRoutes)

app.use(express.json())
app.use(playerRoutes)

app.use(express.json())
app.use(staffDetails)

app.use(express.json())
app.use(overviewDetails)

app.use(express.json())
app.use(activity)

app.use(express.json())
app.use(tmBoxData)

app.use(express.json())
app.use(chart)

app.use(express.json())
app.use(results)

app.use(express.json())
app.use(premierLeague)

app.use(express.json())
app.use(uefaLeague)

app.use(express.json())
app.use(faDetails)

app.use(express.json())
app.use(budget)

app.use(express.json())
app.use(earn)


app.listen(5000, () => {
    console.log("Backend Server is running!");
});