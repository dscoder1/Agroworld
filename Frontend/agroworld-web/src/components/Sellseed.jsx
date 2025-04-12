import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Sellseed.css'
const Sellseed = () => {
    const navigate=useNavigate();
const [loginPhone,setloginPhone]=useState("")
const[seednamedata,setseednamedata]=useState("")
const[gramdata,setgramdata]=useState("")
const[packetdata,setpacketdata]=useState("")
const[pricedata,setpricedata]=useState("")
const [file, setFile] = useState("");
const fun=async()=>{
  const response=await axios.get("http://localhost:3000/loginuser")
  setloginPhone(response.data[0].Phone)
  }

 

   const handleSeedSellForm=async(e)=>{
e.preventDefault();
console.log(loginPhone,packetdata,gramdata,file,seednamedata,pricedata);
const response=await axios.post("http://localhost:3000/seedselldata",{seednamedata,loginPhone,gramdata,packetdata,pricedata,file},
   {
       headers: { "Content-Type": "multipart/form-data" },
     })
console.log(response.data)
if(response.data=="Seed Form Submitted"){
alert("Seed Form Submitted")
navigate("/seedfacility")
}
else{
   alert("Server Down !")
   navigate("/seedfacility")

}
   }

  useEffect(()=>{
    fun();
  },[])
  return (
    <>
    <Navbar/>
    <div className="abouthead">
      <p>Seed Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleSeedSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Seed Name' id="fullnameSignup" onChange={(e)=>{setseednamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' value={loginPhone}/>
<input type="text" placeholder='Quantity Per Packet(in gram.)' id='passSignup' onChange={(e)=>{setgramdata(e.target.value)}}/>
{/* <label  id='photoLabelSignup' for="upload">Upload Profile Photo</label> */}
<input type="text" placeholder='Total Packet' id='passSignup' onChange={(e)=>{setpacketdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Packet' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
    </>
  )
}

export default Sellseed
