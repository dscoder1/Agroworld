import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {
      const navigate=useNavigate();
       const[phonedata,setphonedata]=useState("")
       const[maildata,setmaildata]=useState("")
       const[passworddata,setpassworddata]=useState("")
    
       const handleAdminLoginForm=async(e)=>{
    e.preventDefault();
    console.log(phonedata,passworddata,maildata);
     
    if(phonedata=="9507582209" && passworddata=="SATYA" && maildata=="ds@gmail.com"){
    alert("Account Matched")
    navigate("/adminhome")
    }
    else{
       alert("Invalid Credentials")
       navigate("/adminlogin")
    
    }
       }
  return (
     <>
      <div className="upperLogin">

<div className="mainLogin">
   <div className="leftLogin">
   </div>
   <div className="rightLogin">
<form method='post' onSubmit={handleAdminLoginForm}>
<p id='loginhead'>Admin Login Page</p>
<input type="email" placeholder='Email' id='phonelogin' onChange={(e)=>{setmaildata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phonelogin' onChange={(e)=>{setphonedata(e.target.value)}}/>
<input type="password" placeholder='Password' id='passlogin' onChange={(e)=>{setpassworddata(e.target.value)}}/>
<input type="submit"  id='btnlogin'/>
</form>
   </div>
</div>
</div>

     </>
  )
}

export default Adminlogin
