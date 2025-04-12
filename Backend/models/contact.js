const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Contact DataBase Connected !!")
})
.catch(()=>{
    console.log("Error In Contact DataBase Connection !! ")
})
const ContactSchema=new mongoose.Schema({
    LoginPhone:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true
    },
    Message:{
        type:String,
        required:true
    }
},{timestamps:true})
module.exports=new mongoose.model("ContactDetails",ContactSchema)