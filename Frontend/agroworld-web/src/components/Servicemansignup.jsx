import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Servicemansignup = () => {
    const navigate=useNavigate();
       const[fullnamedata,setfullnamedata]=useState("")
       const[phonedata,setphonedata]=useState("")
       const[passworddata,setpassworddata]=useState("")
       const [file, setFile] = useState("");
    
       const handleSignupForm=async(e)=>{
    e.preventDefault();
    console.log(phonedata,passworddata,file,fullnamedata);
    const response=await axios.post("http://localhost:3000/serviceuserdata",{fullnamedata,phonedata,passworddata,file},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Account Created"){
    alert("Account Created")
    navigate("/servicehome")
    }
    else{
       alert("Server Down !")
       navigate("/servicesignup")
    
    }
       }
  return (
     <>
       <div className="upperSignup">

<div className="mainSignup">
   <div className="leftSignup">
   </div>
   <div className="rightSignup">
<form method='post' onSubmit={handleSignupForm} encType='multipart/form-data'>
<p id='signuphead'>Signup Page</p>
<input type="text" placeholder='Fullname' id="fullnameSignup" onChange={(e)=>{setfullnamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' onChange={(e)=>{setphonedata(e.target.value)}}/>
<input type="password" placeholder='Password' id='passSignup' onChange={(e)=>{setpassworddata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
<a href="/servicelogin" id='accountcreatehead'><p>login ?</p></a>
</form>
</div>
</div>
</div>
     </>
  )
}

export default Servicemansignup
