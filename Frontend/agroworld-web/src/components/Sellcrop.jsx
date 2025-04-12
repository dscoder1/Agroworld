import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sellcrop = () => {
     const navigate=useNavigate();
    const [loginPhone,setloginPhone]=useState("")
    const[cropnamedata,setcropnamedata]=useState("")
    const[kgdata,setkgdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const [file, setFile] = useState("");
    const fun=async()=>{
      const response=await axios.get("http://localhost:3000/loginuser")
      setloginPhone(response.data[0].Phone)
      }
    
     
    
       const handleCropSellForm=async(e)=>{
    e.preventDefault();
    console.log(loginPhone,kgdata,file,cropnamedata,pricedata);
    const response=await axios.post("http://localhost:3000/cropselldata",{loginPhone,kgdata,file,cropnamedata,pricedata},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Crop Form Submitted"){
    alert("Crop Form Submitted")
    navigate("/cropfacility")
    }
    else{
       alert("Server Down !")
       navigate("/cropfacility")
    
    }
       }
    
      useEffect(()=>{
        fun();
      },[])
  return (
     <>
     <Navbar/>
     <div className="abouthead">
      <p>Crop Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleCropSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Crop Name' id="fullnameSignup" onChange={(e)=>{setcropnamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' value={loginPhone}/>
<input type="text" placeholder='Total kg(more than 50 kg)' id='passSignup' onChange={(e)=>{setkgdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
     </>
  )
}

export default Sellcrop
