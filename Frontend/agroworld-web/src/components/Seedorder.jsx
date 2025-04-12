import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Seedorder = () => {
    const{id}=useParams()
    const navigate=useNavigate()
    const[seedname,setseedname]=useState("")
    const[seedkg,setseedkg]=useState("")
    const[seedprice,setseedprice]=useState("")
    const[seedsellernumber,setseedsellernumber]=useState("")
    const[usernumber,setusernumber]=useState("")
    const [loginPhone,setloginPhone]=useState("")
    const [locationorder,setlocationorder]=useState("")

            const fun=async()=>{
        const response=await axios.get(`http://localhost:3000/seedorder/${id}`)
        setseedname(response.data.Seedname)
        setseedprice(response.data.Price)
        setseedsellernumber(response.data.UserPhone)
        
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
                

             
    const handleSeedOrderForm=async(e)=>{
                e.preventDefault();
                console.log(loginPhone,seedkg,seedname,seedprice,seedsellernumber,usernumber,locationorder);
                const response=await axios.post("http://localhost:3000/seedordersubmit",{loginPhone,seedkg,seedname,seedprice,seedsellernumber,usernumber,locationorder})
                console.log(response.data)
                if(response.data=="Insufficient Packets Try For Less Quantity !"){
                    alert("Insufficient Packets Try For Less Quantity !")
                    navigate("/purchaseseeds")
                }
                if(response.data=="Order Placed"){
                alert("Order Placed")
                navigate("/purchaseseeds")
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
<form method='post' onSubmit={handleSeedOrderForm}  id='specialform'>
<input type="text" placeholder='Seed Name' id="fullnameSignup" value={seedname}/>
<input type="text" placeholder='Your Phone Number' id='phoneSignup' onChange={(e)=>{setusernumber(e.target.value)}}/>
<input type="text" placeholder='Packets(in Number)' id='passSignup' onChange={(e)=>{setseedkg(e.target.value)}}/>
<input type="text" placeholder='Price Per Packets' id='passSignup' value={seedprice+' Per Kg'}/>
<input type="text" placeholder='Location' id='passSignup' onChange={(e)=>{setlocationorder(e.target.value)}} value={locationorder}/>
<button id='sameloc' onClick={handleLocation}>Same As Current Location</button>
<input type="submit"  id='btnSignup' value='Place Order'/>
</form>
</div>
     </>
  )
}

export default Seedorder
