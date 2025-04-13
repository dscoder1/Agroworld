const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{console.log("Connected With Vegetable Allocater Collections")})
.catch(()=>{console.log("Error In Connection")})
const VegetableAllocateSchema=new mongoose.Schema(
    {
        LoginUser:{
            type:String,
            required:true
         },
        Vegetablename:{
            type:String,
            required:true
        },
        OrderedPhone:{
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
        SellerPhone:{
            type:String,
            required:true
        },
        Location:{
            type:String,
            required:true
        },
        IsDone:{
            type:String
        },   
AllocaterNumber:{
    type:String,
    required:true
}  
,
DeliveryDone:{
    type:String,
    required:true
} 
    },{timestamps:true}
)
module.exports=new mongoose.model("VegetableAllocateDetails",VegetableAllocateSchema)