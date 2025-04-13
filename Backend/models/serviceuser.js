const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With Service User Collections")})
.catch(()=>{console.log("Error In Connection")})
const ServiceUserSchema=new mongoose.Schema(
    {
        Fullname:{
            type:String,
            required:true
        },
        Phone:{
            type:String,
            required:true,
            unique:true
        },
        Password:{
            type:String,
            required:true
        },
        Photo:{
            type:String,
            required:true
        }
    },{timestamps:true}
)
module.exports=new mongoose.model("ServiceUserDetails",ServiceUserSchema)