import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ServicemanLogin = () => {
    const navigate=useNavigate();
       const[phonedata,setphonedata]=useState("")
       const[passworddata,setpassworddata]=useState("")
    
       const handleLoginForm=async(e)=>{
    e.preventDefault();
    console.log(phonedata,passworddata);
    const response=await axios.post("http://localhost:3000/servicelogin",{phonedata,passworddata})
    console.log(response.data)
    if(response.data=="Account Matched"){
    alert("Account Matched")
    navigate("/servicehome")
    }
    else{
       alert("Invalid Credentials")
       navigate("/servicesignup")
    
    }
}
  return (
     <>
      <div className="upperLogin">
<div className="mainLogin">
   <div className="leftLogin">
   {/* <img src={PlantBack} alt="Plant Image" id='plantbackimage'/> */}
   </div>
   <div className="rightLogin">
<form method='post' onSubmit={handleLoginForm}>
<p id='loginhead'>Login Page</p>
<input type="text" placeholder='Phone Number' id='phonelogin' onChange={(e)=>{setphonedata(e.target.value)}}/>
<input type="password" placeholder='Password' id='passlogin' onChange={(e)=>{setpassworddata(e.target.value)}}/>
<input type="submit"  id='btnlogin'/>
<a href="/servicesignup" id='accountcreatehead'><p>create an account ?</p></a>
</form>
   </div>
</div>
</div>

     </>
  )
}

export default ServicemanLogin
