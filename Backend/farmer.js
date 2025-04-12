const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
const path = require("path")
const multer = require("multer")
const app = express()
const cors = require("cors")
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))


app.post("/userdata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const UserDetails = await userdata.create({
        Fullname: req.body.fullnamedata,
        Phone: req.body.phonedata,
        Password: req.body.passworddata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Account Created")
    }
})


app.post("/login", async (req, res) => {
    console.log(req.body)
    const data = await userdata.findOne({ Phone: req.body.phonedata, Password: req.body.passworddata })
    console.log(data)
    if (data) {
        await logindata.deleteOne({})
        const login = await logindata.create({
            Phone: req.body.phonedata,
            Password: req.body.passworddata
        })
        return res.status(200).send("Account Matched")
    }
    else {
        return res.status(200).send("Account Not Matched")
    }
})
app.get("/loginuser", async (req, res) => {
    const data = await logindata.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.listen(process.env.PORT, () => {
    console.log("Server Is Running On Port :", process.env.PORT)
})