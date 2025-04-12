const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With Seed Sell Collections")})
.catch(()=>{console.log("Error In Connection")})
const FarmingOrderSchema=new mongoose.Schema(
    {
        LoginUser:{
            type:String,
            required:true
        },
        Productname:{
            type:String,
            required:true
        },
        UserPhone:{
            type:String,
            required:true
        },
        TotalPackets:{
            type:String,
            required:true
        },
        Price:{
            type:String,
            required:true
        },
        Location:{
            type:String,
            required:true
        },
        IsDone:{
            type:String
        }
    },{timestamps:true}
)
module.exports=new mongoose.model("FarmingOrderDetails",FarmingOrderSchema)