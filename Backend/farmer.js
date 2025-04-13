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
const userdata = require("./models/User")
const logindata = require("./models/Login")
const contact = require("./models/contact")
const seedselldata = require("./models/Seedselldata")
const cropselldata = require("./models/Cropselldata")
const vegetableselldata = require("./models/Vegetableselldata")
const prd = require("./models/Product")
const vegetableorder = require("./models/vegetableorder")
const croporder = require("./models/croporder")
const seedorder = require("./models/seedorder")
const prdorder = require("./models/productorder")
const dboy = require("./models/Dboy")
const farming = require("./models/farmingmaterial")
const farmingorder = require("./models/farmingorder")

app.use("/files", express.static("files"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});


const upload = multer({ storage: storage });

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



app.post("/dboydata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const DboyDetails = await dboy.create({
        Fullname: req.body.fullnamedata,
        Phone: req.body.phonedata,
        Password: req.body.passworddata,
        Photo: req.file.filename
    })
    if (DboyDetails) {
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


app.post("/contactForm", async (req, res) => {
    console.log(req.body)
    const data = await contact.create({
        LoginPhone: req.body.loginPhone,
        Email: req.body.emaildata,
        Message: req.body.msgdata
    })
    return res.status(200).send("Sent")
})

app.post("/seedselldata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const UserDetails = await seedselldata.create({
        Seedname: req.body.seednamedata,
        UserPhone: req.body.loginPhone,
        Gram: req.body.gramdata,
        TotalPacket: req.body.packetdata,
        Price: req.body.pricedata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Seed Form Submitted")
    }
})


app.post("/cropselldata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const UserDetails = await cropselldata.create({
        Cropname: req.body.cropnamedata,
        UserPhone: req.body.loginPhone,
        TotalKg: req.body.kgdata,
        Price: req.body.pricedata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Crop Form Submitted")
    }
})


app.post("/vegetableselldata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const UserDetails = await vegetableselldata.create({
        Vegetablename: req.body.vegetablenamedata,
        UserPhone: req.body.loginPhone,
        TotalKg: req.body.kgdata,
        Price: req.body.pricedata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Vegetable Form Submitted")
    }
})

app.post("/seedalldata", async (req, res) => {
    const logindataVal = await logindata.find({})
    console.log(logindataVal[0].Phone)
    const data = await seedselldata.find({ UserPhone: { $ne: logindataVal[0].Phone } })
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/cropalldata", async (req, res) => {
    const logindataVal = await logindata.find({})
    console.log(logindataVal[0].Phone)
    const data = await cropselldata.find({ UserPhone: { $ne: logindataVal[0].Phone } })
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/vegetablealldata", async (req, res) => {
    const logindataVal = await logindata.find({})
    console.log(logindataVal[0].Phone)
    const data = await vegetableselldata.find({ UserPhone: { $ne: logindataVal[0].Phone } })
    if (data) {
        return res.status(200).send(data)
    }
})



app.post("/adminseedalldata", async (req, res) => {

    const data = await seedselldata.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/admincropalldata", async (req, res) => {

    const data = await cropselldata.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/adminvegetablealldata", async (req, res) => {

    const data = await vegetableselldata.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/allfeeddata", async (req, res) => {

    const data = await contact.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/allprddata", async (req, res) => {

    const data = await prd.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/productadd", upload.single("file"), async (req, res) => {
    console.log(req.body)

    const UserDetails = await prd.create({
        Productname: req.body.productnamedata,
        TotalKg: req.body.gramdata,
        Price: req.body.pricedata,
        Desc: req.body.msgdata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Product Form Submitted")
    }
})

app.get("/vegetableorder/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await vegetableselldata.findOne({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/croporder/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await cropselldata.findOne({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/seedorder/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await seedselldata.findOne({ _id: req.params.id })
    console.log(data)
    if (data) {
        return res.status(200).send(data)
    }
})


app.get("/productorder/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await prd.findOne({ _id: req.params.id })
    console.log(data)
    if (data) {
        return res.status(200).send(data)
    }
})


app.get("/farmingorder/:id", async (req, res) => {
    console.log(req.params.id)
    const data = await farming.findOne({ _id: req.params.id })
    console.log(data)
    if (data) {
        return res.status(200).send(data)
    }
})

app.post("/vegetableordersubmit", async (req, res) => {
    console.log(req.body)
    const data1 = await vegetableselldata.findOne({ Vegetablename: req.body.vegetablename, UserPhone: req.body.vegetablesellernumber, Price: req.body.vegetableprice })
    var totalvalueOfKg = parseInt(data1.TotalKg)
    var ordervalueOfKg = parseInt(req.body.vegetablekg)
    var remainingKg = totalvalueOfKg - ordervalueOfKg
    var remainingKgStr = String(remainingKg)
    if (ordervalueOfKg > totalvalueOfKg) {
        return res.status(200).send("Insufficient Quantity Try For Less Quantity !")

    }
    else {
        const data = await vegetableorder.create({
            LoginUser: req.body.loginPhone,
            Vegetablename: req.body.vegetablename,
            UserPhone: req.body.usernumber,
            TotalKg: req.body.vegetablekg,
            Price: req.body.vegetableprice,
            SellerPhone: req.body.vegetablesellernumber,
            Location: req.body.locationorder,
            IsDone: "No"
        })
        const data2 = await vegetableselldata.findOneAndUpdate({ _id: data1._id }, { TotalKg: remainingKgStr })
        if (data2) {
            return res.status(200).send("Order Placed")

        }

    }
})

app.post("/cropordersubmit", async (req, res) => {
    console.log(req.body)
    const data1 = await cropselldata.findOne({ Cropname: req.body.cropname, UserPhone: req.body.cropsellernumber, Price: req.body.cropprice })
    var totalvalueOfKg = parseInt(data1.TotalKg)
    var ordervalueOfKg = parseInt(req.body.cropkg)
    var remainingKg = totalvalueOfKg - ordervalueOfKg
    var remainingKgStr = String(remainingKg)
    console.log(data1, totalvalueOfKg, ordervalueOfKg, remainingKg, remainingKgStr)
    if (ordervalueOfKg > totalvalueOfKg) {
        return res.status(200).send("Insufficient Quantity Try For Less Quantity !")

    }
    else {
        const data = await croporder.create({
            LoginUser: req.body.loginPhone,
            Cropname: req.body.cropname,
            UserPhone: req.body.usernumber,
            TotalKg: req.body.cropkg,
            Price: req.body.cropprice,
            SellerPhone: req.body.cropsellernumber,
            Location: req.body.locationorder,
            IsDone: "No"
        })
        const data2 = await cropselldata.findOneAndUpdate({ _id: data1._id }, { TotalKg: remainingKgStr })
        if (data2) {
            return res.status(200).send("Order Placed")

        }
    }

})


app.post("/productordersubmit", async (req, res) => {
    console.log(req.body)
    const data1 = await prd.findOne({ Productname: req.body.productname, Price: req.body.productprice })
    var totalvalueOfKg = parseInt(data1.TotalKg)
    var ordervalueOfKg = parseInt(req.body.productkg)
    var remainingKg = totalvalueOfKg - ordervalueOfKg
    var remainingKgStr = String(remainingKg)
    console.log(data1, totalvalueOfKg, ordervalueOfKg, remainingKg, remainingKgStr)
    if (ordervalueOfKg > totalvalueOfKg) {
        return res.status(200).send("Insufficient Quantity Try For Less Quantity !")

    }
    else {
        const data = await prdorder.create({
            LoginUser: req.body.loginPhone,
            Productname: req.body.productname,
            UserPhone: req.body.usernumber,
            TotalKg: req.body.productkg,
            Price: req.body.productprice,
            Location: req.body.locationorder,
            Desc: req.body.productdesc,
            IsDone: "No"

        })
        const data2 = await prd.findOneAndUpdate({ _id: data1._id }, { TotalKg: remainingKgStr })
        if (data2) {
            return res.status(200).send("Order Placed")

        }
    }

})



app.post("/seedordersubmit", async (req, res) => {
    console.log(req.body)
    const data1 = await seedselldata.findOne({ Seedname: req.body.seedname, UserPhone: req.body.seedsellernumber, Price: req.body.seedprice })
    var totalvalueOfPackets = parseInt(data1.TotalPacket)
    var ordervalueOfPackets = parseInt(req.body.seedkg)
    var remainingPackets = totalvalueOfPackets - ordervalueOfPackets
    var remainingPacketsStr = String(remainingPackets)
    console.log(data1, totalvalueOfPackets, ordervalueOfPackets, remainingPackets, remainingPacketsStr)
    if (ordervalueOfPackets > totalvalueOfPackets) {
        return res.status(200).send("Insufficient Packets Try For Less Quantity !")

    }
    else {
        const data = await seedorder.create({
            LoginUser: req.body.loginPhone,
            Seedname: req.body.seedname,
            UserPhone: req.body.usernumber,
            TotalPackets: req.body.seedkg,
            Price: req.body.seedprice,
            SellerPhone: req.body.seedsellernumber,
            Location: req.body.locationorder,
            IsDone: "No"

        })
        const data2 = await seedselldata.findOneAndUpdate({ _id: data1._id }, { TotalPacket: remainingPacketsStr })
        if (data2) {
            return res.status(200).send("Order Placed")

        }
    }


})


app.post("/farmingordersubmit", async (req, res) => {
    console.log(req.body)
    const data1 = await farming.findOne({ Productname: req.body.prdname, Price: req.body.prdprice })
    var totalvalueOfPackets = parseInt(data1.TotalPacket)
    var ordervalueOfPackets = parseInt(req.body.prdkg)
    var remainingPackets = totalvalueOfPackets - ordervalueOfPackets
    var remainingPacketsStr = String(remainingPackets)
    console.log(data1, totalvalueOfPackets, ordervalueOfPackets, remainingPackets, remainingPacketsStr)
    if (ordervalueOfPackets > totalvalueOfPackets) {
        return res.status(200).send("Insufficient Packets Try For Less Quantity !")

    }
    else {
        const data = await farmingorder.create({
            LoginUser: req.body.loginPhone,
            Productname: req.body.prdname,
            UserPhone: req.body.usernumber,
            TotalPackets: req.body.prdkg,
            Price: req.body.prdprice,
            Location: req.body.locationorder,
            IsDone: "No"
        })
        const data2 = await farming.findOneAndUpdate({ _id: data1._id }, { TotalPacket: remainingPacketsStr })
        if (data2) {
            return res.status(200).send("Order Placed")

        }
    }

})


app.get("/allvegetableorder", async (req, res) => {
    const data = await vegetableorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allseedorder", async (req, res) => {
    const data = await seedorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allcroporder", async (req, res) => {
    const data = await croporder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})


app.get("/allproductorder", async (req, res) => {

    const data = await prdorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})



app.get("/allmyvegetableorder", async (req, res) => {
    const login = await logindata.find({})
    console.log(login[0].Phone)
    const data = await vegetableorder.find({ LoginUser: login[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allmyseedorder", async (req, res) => {
    const login = await logindata.find({})
    console.log(login[0].Phone)
    const data = await seedorder.find({ LoginUser: login[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allmycroporder", async (req, res) => {
    const login = await logindata.find({})
    console.log(login[0].Phone)
    const data = await croporder.find({ LoginUser: login[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})


app.get("/allmyproductorder", async (req, res) => {
    const login = await logindata.find({})
    console.log(login[0].Phone)
    const data = await prdorder.find({ LoginUser: login[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allmyfarmingorder", async (req, res) => {
    const login = await logindata.find({})
    console.log(login[0].Phone)
    const data = await farmingorder.find({ LoginUser: login[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})



app.get("/alluserdata", async (req, res) => {
    const data = await userdata.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/alldboydata", async (req, res) => {
    const data = await dboy.find({})
    if (data) {
        return res.status(200).send(data)
    }
})



app.post("/farmingdata", upload.single("file"), async (req, res) => {
    console.log(req.body)
    const UserDetails = await farming.create({
        Productname: req.body.prdnamedata,
        Gram: req.body.gramdata,
        TotalPacket: req.body.packetdata,
        Price: req.body.pricedata,
        Desc: req.body.descdata,
        Photo: req.file.filename
    })
    if (UserDetails) {
        return res.status(200).send("Material Form Submitted")
    }
})
app.get("/allfarmingdata", async (req, res) => {
    const data = await farming.find({})
    if (data) {
        return res.status(200).send(data)
    }
})


app.get("/userseedproduct", async (req, res) => {
    const data = await logindata.find({})
    console.log(data[0].Phone)
    const productseed = await seedselldata.find({ UserPhone: data[0].Phone })
    console.log(productseed)
    return res.status(200).send(productseed)
})


app.get("/usercropproduct", async (req, res) => {
    const data = await logindata.find({})
    console.log(data[0].Phone)
    const cropproduct = await cropselldata.find({ UserPhone: data[0].Phone })
    console.log(cropproduct)
    return res.status(200).send(cropproduct)
})


app.get("/uservegetableproduct", async (req, res) => {
    const data = await logindata.find({})
    console.log(data[0].Phone)
    const productvegetable = await vegetableselldata.find({ UserPhone: data[0].Phone })
    console.log(productvegetable)
    return res.status(200).send(productvegetable)
})

app.get("/allseedorderadmin", async (req, res) => {
    const data = await seedorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allcroporderadmin", async (req, res) => {
    const data = await croporder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allvegetableorderadmin", async (req, res) => {
    const data = await vegetableorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allproductorderadmin", async (req, res) => {
    const data = await prdorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allfarmingorderadmin", async (req, res) => {
    const data = await farmingorder.find({})
    if (data) {
        return res.status(200).send(data)
    }
})




app.get("/allocatevegetableorder/:id", async (req, res) => {
    const data = await vegetableorder.find({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allocateproductorder/:id", async (req, res) => {
    const data = await prdorder.find({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allocatecroporder/:id", async (req, res) => {
    const data = await croporder.find({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allocateseedorder/:id", async (req, res) => {
    const data = await seedorder.find({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allocatefarmingorder/:id", async (req, res) => {
    const data = await farmingorder.find({ _id: req.params.id })
    if (data) {
        return res.status(200).send(data)
    }
})
app.post("/allocatevegetableorder", async (req, res) => {
    var price = parseInt(req.body.vegetableprice)
    var kg = parseInt(req.body.vegetablekg)
    var totalprice = price * kg
    var totalpriceStr = String(totalprice)
    const data = await allocatevegetable.create({
        LoginUser: req.body.logindata,
        Vegetablename: req.body.vegetablename,
        OrderedPhone: req.body.vegetablebuyernumber,
        TotalKg: req.body.vegetablekg,
        Price: totalpriceStr,
        SellerPhone: req.body.vegetablesellernumber,
        Location: req.body.locationorder,
        IsDone: "Yes",
        AllocaterNumber: req.body.vegetableallocaternumber,
        DeliveryDone:"No"
    })
    if (data) {
        const deleteddata = await vegetableorder.findOneAndDelete({ _id: req.body.iddata })
        return res.status(200).send("Order Allocated")
    }
    else {
        return res.status(200).send("Error In Order Allocation")

    }
})

app.post("/allocatecroporder", async (req, res) => {
    var price = parseInt(req.body.vegetableprice)
    var kg = parseInt(req.body.vegetablekg)
    var totalprice = price * kg
    var totalpriceStr = String(totalprice)
    const data = await allocatecrop.create({
        LoginUser: req.body.logindata,
        Cropname: req.body.vegetablename,
        OrderedPhone: req.body.vegetablebuyernumber,
        TotalKg: req.body.vegetablekg,
        Price: totalpriceStr,
        SellerPhone: req.body.vegetablesellernumber,
        Location: req.body.locationorder,
        IsDone: "Yes",
        AllocaterNumber: req.body.vegetableallocaternumber,
        DeliveryDone:"No"
    })
    if (data) {
        const deleteddata = await croporder.findOneAndDelete({ _id: req.body.iddata })
        return res.status(200).send("Order Allocated")
    }
    else {
        return res.status(200).send("Error In Order Allocation")

    }
})



app.post("/allocateseedorder", async (req, res) => {
    var price = parseInt(req.body.vegetableprice)
    var kg = parseInt(req.body.vegetablekg)
    var totalprice = price * kg
    var totalpriceStr = String(totalprice)
    console.log(req.body)
    const data = await allocateseed.create({
        LoginUser: req.body.logindata,
        Seedname: req.body.vegetablename,
        OrderedPhone: req.body.vegetablebuyernumber,
        TotalPackets: req.body.vegetablekg,
        Price: totalpriceStr,
        SellerPhone: req.body.vegetablesellernumber,
        Location: req.body.locationorder,
        IsDone: "Yes",
        AllocaterNumber: req.body.vegetableallocaternumber,
        DeliveryDone:"No"
    })
    if (data) {
        const deleteddata = await seedorder.findOneAndDelete({ _id: req.body.iddata })
        return res.status(200).send("Order Allocated")
    }
    else {
        return res.status(200).send("Error In Order Allocation")

    }
})




app.post("/allocatefarmingorder", async (req, res) => {
    var price = parseInt(req.body.vegetableprice)
    var kg = parseInt(req.body.vegetablekg)
    var totalprice = price * kg
    var totalpriceStr = String(totalprice)
    const data = await allocatefarming.create({
        LoginUser: req.body.logindata,
        Productname: req.body.vegetablename,
        OrderedPhone: req.body.vegetablebuyernumber,
        TotalPackets: req.body.vegetablekg,
        Price: totalpriceStr,
        Location: req.body.locationorder,
        IsDone: "Yes",
        AllocaterNumber: req.body.vegetableallocaternumber,
        DeliveryDone:"No"
    })
    if (data) {
        const deleteddata = await farmingorder.findOneAndDelete({ _id: req.body.iddata })
        return res.status(200).send("Order Allocated")
    }
    else {
        return res.status(200).send("Error In Order Allocation")

    }
})



app.post("/allocateproductorder", async (req, res) => {
    var price = parseInt(req.body.vegetableprice)
    var kg = parseInt(req.body.vegetablekg)
    var totalprice = price * kg
    var totalpriceStr = String(totalprice)
    const data = await allocateprd.create({
        LoginUser: req.body.logindata,
        Productname: req.body.vegetablename,
        OrderedPhone: req.body.vegetablebuyernumber,
        TotalKg: req.body.vegetablekg,
        Price: totalpriceStr,
        Desc: req.body.descdata,
        Location: req.body.locationorder,
        IsDone: "Yes",
        AllocaterNumber: req.body.vegetableallocaternumber,
        DeliveryDone:"No"
    })
    if (data) {
        const deleteddata = await prdorder.findOneAndDelete({ _id: req.body.iddata })
        return res.status(200).send("Order Allocated")
    }
    else {
        return res.status(200).send("Error In Order Allocation")

    }
})

app.get("/allallocatedseedorder", async (req, res) => {
    const data = await allocateseed.find({})
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allallocatedcroporder", async (req, res) => {
    const data = await allocatecrop.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedvegetableorder", async (req, res) => {
    const data = await allocatevegetable.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedproductorder", async (req, res) => {
    const data = await allocateprd.find({})
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedotherorder", async (req, res) => {
    const data = await allocatefarming.find({})
    if (data) {
        return res.status(200).send(data)
    }
})





app.get("/allallocatedseedorderuser", async (req, res) => {
    const data1 = await logindata.find({})
    console.log(data1[0].Phone)
    const data = await allocateseed.find({ LoginUser: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allallocatedcroporderuser", async (req, res) => {
    const data1 = await logindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatecrop.find({ LoginUser: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedvegetableorderuser", async (req, res) => {
    const data1 = await logindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatevegetable.find({ LoginUser: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedproductorderuser", async (req, res) => {
    const data1 = await logindata.find({})
    console.log(data1[0].Phone)
    const data = await allocateprd.find({ LoginUser: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedotherorderuser", async (req, res) => {
    const data1 = await logindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatefarming.find({ LoginUser: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})






app.get("/allallocatedseedorderservice", async (req, res) => {
    const data1 = await servicelogindata.find({})
    console.log(data1[0].Phone)
    const data = await allocateseed.find({ AllocaterNumber: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})

app.get("/allallocatedcroporderservice", async (req, res) => {
    const data1 = await servicelogindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatecrop.find({ AllocaterNumber: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedvegetableorderservice", async (req, res) => {
    const data1 = await servicelogindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatevegetable.find({ AllocaterNumber: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedproductorderservice", async (req, res) => {
    const data1 = await servicelogindata.find({})
    console.log(data1[0].Phone)
    const data = await allocateprd.find({ AllocaterNumber: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})
app.get("/allallocatedotherorderservice", async (req, res) => {
    const data1 = await servicelogindata.find({})
    console.log(data1[0].Phone)
    const data = await allocatefarming.find({ AllocaterNumber: data1[0].Phone })
    if (data) {
        return res.status(200).send(data)
    }
})




app.listen(process.env.PORT, () => {
    console.log("Server Is Running On Port :", process.env.PORT)
})