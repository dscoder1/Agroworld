import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sellvegetable = () => {
    const navigate=useNavigate();
    const [loginPhone,setloginPhone]=useState("")
    const[vegetablenamedata,setvegetablenamedata]=useState("")
    const[kgdata,setkgdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const [file, setFile] = useState("");
    const fun=async()=>{
      const response=await axios.get("http://localhost:3000/loginuser")
      setloginPhone(response.data[0].Phone)
      }
    
     
    
       const handleCropSellForm=async(e)=>{
    e.preventDefault();
    console.log(loginPhone,kgdata,file,vegetablenamedata,pricedata);
    const response=await axios.post("http://localhost:3000/vegetableselldata",{loginPhone,kgdata,file,vegetablenamedata,pricedata},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Vegetable Form Submitted"){
    alert("Vegetable Form Submitted")
    navigate("/vegetablefacility")
    }
    else{
       alert("Server Down !")
       navigate("/vegetablefacility")
    
    }
       }
    
      useEffect(()=>{
        fun();
      },[])
  return (
     <>
     <Navbar/>
     <div className="abouthead">
      <p>Vegetable Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleCropSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Crop Name' id="fullnameSignup" onChange={(e)=>{setvegetablenamedata(e.target.value)}}/>
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

export default Sellvegetable
