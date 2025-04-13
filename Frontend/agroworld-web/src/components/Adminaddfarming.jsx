import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';

const Adminaddfarming = () => {
    const navigate=useNavigate();
const[prdnamedata,setprdnamedata]=useState("")
const[gramdata,setgramdata]=useState("")
const[packetdata,setpacketdata]=useState("")
const[pricedata,setpricedata]=useState("")
const [file, setFile] = useState("");
const [descdata, setdescdata] = useState("");
 
   const handleFarmingForm=async(e)=>{
e.preventDefault();
console.log(packetdata,gramdata,file,prdnamedata,pricedata,descdata);
const response=await axios.post("http://localhost:3000/farmingdata",{prdnamedata,gramdata,packetdata,pricedata,file,descdata},
   {
       headers: { "Content-Type": "multipart/form-data" },
     })
console.log(response.data)
if(response.data=="Material Form Submitted"){
alert("Form Submitted")
navigate("/adminservice")
}
else{
   alert("Server Down !")
   navigate("/adminservice")

}
   }
    const [allfarmingdata,setallfarmingdata]=useState([])
    const fun=async()=>{
const response=await axios.get("http://localhost:3000/allfarmingdata")
console.log(response.data)
setallfarmingdata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
       <Adminnavbar/>
       <div className="abouthead">
      <p>Seed Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleFarmingForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Product Name' id="fullnameSignup" onChange={(e)=>{setprdnamedata(e.target.value)}}/>
<input type="text" placeholder='Quantity Per Packet(in gram.)' id='passSignup' onChange={(e)=>{setgramdata(e.target.value)}}/>
<input type="text" placeholder='Total Packet' id='passSignup' onChange={(e)=>{setpacketdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Packet' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<textarea name="feed" id="prddesc" placeholder='Product Description' onChange={(e)=>{setdescdata(e.target.value)}} required></textarea>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
<div className="PurchaseSeed">
     <p id='stock'>Products Stock</p>
     {allfarmingdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
 {/* <a href={"farmingorder/"+values._id}><button id='orderbutton'>Place Order</button></a> */}
 
     </div>
     <div className="secondbox">
     <img src={`http://localhost:3000/files/${values.Photo}`} alt="Seed Image" />
     </div>
     </div>
     </>
    ))}
     </div>

     </>
  )
}

export default Adminaddfarming
