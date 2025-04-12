const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With Vegetable Sell Collections")})
.catch(()=>{console.log("Error In Connection")})
const VegetableSellSchema=new mongoose.Schema(
    {
        Vegetablename:{
            type:String,
            required:true
        },
        UserPhone:{
            type:String,
            required:true
        },
        TotalKg:{
            type:String,
            required:true
        },
        Price:{
            type:String,
            required:true
        },
        Photo:{
            type:String,
            required:true
        }
    },{timestamps:true}
)
module.exports=new mongoose.model("VegetablesellDetails",VegetableSellSchema)