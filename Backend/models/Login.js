const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With Login Collections")})
.catch(()=>{console.log("Error In Connection")})
const LoginSchema=new mongoose.Schema(
    {
        Phone:{
            type:String,
            required:true,
            unique:true
        },
        Password:{
            type:String,
            required:true
        }
    },{timestamps:true}
)
module.exports=new mongoose.model("LoginDetails",LoginSchema)