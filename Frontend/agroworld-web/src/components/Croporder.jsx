import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Croporder = () => {
    const{id}=useParams()
    const navigate=useNavigate()
    const[cropname,setcropname]=useState("")
    const[cropkg,setcropkg]=useState("")
    const[cropprice,setcropprice]=useState("")
    const[cropsellernumber,setcropsellernumber]=useState("")
    const[usernumber,setusernumber]=useState("")
    const [loginPhone,setloginPhone]=useState("")
    const [locationorder,setlocationorder]=useState("")

            const fun=async()=>{
        const response=await axios.get(`http://localhost:3000/croporder/${id}`)
        console.log(response.data)
        setcropname(response.data.Cropname)
        setcropprice(response.data.Price)
        setcropkg(response.data.TotalKg)
        setcropsellernumber(response.data.UserPhone)
        
          const response1=await axios.get("http://localhost:3000/loginuser")
          console.log(response1.data[0].Phone)
          setloginPhone(response1.data[0].Phone)
          
            }

            const handleLocation=async(e)=>{
                e.preventDefault();
                
                    if(navigator.geolocation){
                        navigator.geolocation.getCurrentPosition(async (position)=>{
                const {latitude,longitude}=position.coords
                console.log(latitude,longitude) 
                try {
                    const apiKey="c87463ad06a24bc5a3e3818924fa958b"
                    const res=await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=${apiKey}`)
                    const data=await res.json()
                    console.log(data)
                    console.log(data.results[0].formatted)
                    setlocationorder(data.results[0].formatted)
                      }
                catch (error) {
                    console.log(error.message)
                }
                        })
                    }
                }
                

             
    const handleCropOrderForm=async(e)=>{
                e.preventDefault();
                console.log(loginPhone,cropkg,cropname,cropprice,cropsellernumber,usernumber,locationorder);
                const response=await axios.post("http://localhost:3000/cropordersubmit",{loginPhone,cropkg,cropname,cropprice,cropsellernumber,usernumber,locationorder})
                console.log(response.data)
                if(response.data=="Insufficient Quantity Try For Less Quantity !"){
                    alert("Insufficient Quantity Try For Less Quantity !")
                    navigate("/purchasecrop")
                }
                if(response.data=="Order Placed"){
                alert("Order Placed")
                navigate("/purchasecrop")
                }
                
                   }
            useEffect(()=>{
                fun()
            },[])
  return (
     <>
     <Navbar/>
     <div className="abouthead">
      <p>Vegetable Order Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleCropOrderForm}  id='specialform'>
<input type="text" placeholder='Crop Name' id="fullnameSignup" value={cropname}/>
<input type="text" placeholder='Your Phone Number' id='phoneSignup' onChange={(e)=>{setusernumber(e.target.value)}}/>
<input type="text" placeholder='Quantity In Kg' id='passSignup' onChange={(e)=>{setcropkg(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' value={cropprice+' Per Kg'}/>
<input type="text" placeholder='Location' id='passSignup' onChange={(e)=>{setlocationorder(e.target.value)}} value={locationorder}/>
<button id='sameloc' onClick={handleLocation}>Same As Current Location</button>
<input type="submit"  id='btnSignup' value='Place Order'/>
</form>
</div>
     </>
  )
}

export default Croporder
