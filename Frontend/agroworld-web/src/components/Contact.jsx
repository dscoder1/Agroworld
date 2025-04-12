import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Contact.css'
const Contact = () => {
  const navigate=useNavigate();
  const [emaildata,setemaildata]=useState("")
  const [msgdata,setmsgdata]=useState("")
const [loginPhone,setloginPhone]=useState("")
const fun=async()=>{
  const response=await axios.get("http://localhost:3000/loginuser")
  setloginPhone(response.data[0].Phone)
  }
const handleContactForm=async(e)=>{
  e.preventDefault();
  console.log(emaildata,msgdata)
  const response=await axios.post("http://localhost:3000/contactForm",{loginPhone,emaildata,msgdata})
  console.log(response.data)
  if(response.data=="Sent"){
  alert("Feedback Sent Response You Fast !! ")
  navigate("/home")
  }
  else{
    alert("Error In Feedback Sent Try Again !! ")
  navigate("/contact")
  
  }
      }
      useEffect(()=>{
          fun();
      },[])
  return (
     <>
     <Navbar/>
     <div className="form">
        <form  method='post' onSubmit={handleContactForm} className='cnctForm'>
          <p id='cnctfrm'>Contact Form</p>
            <input type="email" placeholder='Your Email' name='email' id='email' onChange={(e)=>{setemaildata(e.target.value)}} required/>
            <textarea name="feed" id="feed" placeholder='Your Message' onChange={(e)=>{setmsgdata(e.target.value)}} required></textarea>
              
            <input type="submit" value='Submit' id='btnCnct'/>
        </form>
    </div>
     </>
  )
}

export default Contact
