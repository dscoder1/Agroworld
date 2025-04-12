import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Vegetableorder = () => {
    const{id}=useParams()
    const navigate=useNavigate()
    const[vegetablename,setvegetablename]=useState("")
    const[vegetablekg,setvegetablekg]=useState("")
    const[vegetableprice,setvegetableprice]=useState("")
    const[vegetablesellernumber,setvegetablesellernumber]=useState("")
    const[usernumber,setusernumber]=useState("")
    const [loginPhone,setloginPhone]=useState("")
    const [locationorder,setlocationorder]=useState("")

            const fun=async()=>{
        const response=await axios.get(`http://localhost:3000/vegetableorder/${id}`)
        setvegetablename(response.data.Vegetablename)
        setvegetableprice(response.data.Price)
        setvegetablekg(response.data.TotalKg)
        setvegetablesellernumber(response.data.UserPhone)
        
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
                

             
    const handleVegetableOrderForm=async(e)=>{
                e.preventDefault();
                console.log(loginPhone,vegetablekg,vegetablename,vegetableprice,vegetablesellernumber,usernumber,locationorder);
                const response=await axios.post("http://localhost:3000/vegetableordersubmit",{loginPhone,vegetablekg,vegetablename,vegetableprice,vegetablesellernumber,usernumber,locationorder})
                console.log(response.data)
                if(response.data=="Insufficient Quantity Try For Less Quantity !"){
                    alert("Insufficient Quantity Try For Less Quantity !")
                    navigate("/purchasevegetable")
                }
                if(response.data=="Order Placed"){
                alert("Order Placed")
                navigate("/purchasevegetable")
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
<form method='post' onSubmit={handleVegetableOrderForm}  id='specialform'>
<input type="text" placeholder='Vegetable Name' id="fullnameSignup" value={vegetablename}/>
<input type="text" placeholder='Your Phone Number' id='phoneSignup' onChange={(e)=>{setusernumber(e.target.value)}}/>
<input type="text" placeholder='Quantity In Kg' id='passSignup' onChange={(e)=>{setvegetablekg(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' value={vegetableprice+' Per Kg'}/>
<input type="text" placeholder='Location' id='passSignup' onChange={(e)=>{setlocationorder(e.target.value)}} value={locationorder}/>
<button id='sameloc' onClick={handleLocation}>Same As Current Location</button>
<input type="submit"  id='btnSignup' value='Place Order'/>
</form>
</div>
     </>
  )
}

export default Vegetableorder
