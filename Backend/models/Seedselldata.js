const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With SeedSell Collections")})
.catch(()=>{console.log("Error In Connection")})
const SeedSellSchema=new mongoose.Schema(
    {
        Seedname:{
            type:String,
            required:true
        },
        UserPhone:{
            type:String,
            required:true
        },
        Gram:{
            type:String,
            required:true
        },
        TotalPacket:{
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
module.exports=new mongoose.model("SeedsellDetails",SeedSellSchema)