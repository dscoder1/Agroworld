import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

const Farmingorder = () => {
    const{id}=useParams()
    const navigate=useNavigate()
    const[prdname,setprdname]=useState("")
    const[prdkg,setprdkg]=useState("")
    const[prdprice,setprdprice]=useState("")
    const[usernumber,setusernumber]=useState("")
    const [loginPhone,setloginPhone]=useState("")
    const [locationorder,setlocationorder]=useState("")

            const fun=async()=>{
        const response=await axios.get(`http://localhost:3000/farmingorder/${id}`)
        setprdname(response.data.Productname)
        setprdprice(response.data.Price)        
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
                

             
    const handleFarmingOrderForm=async(e)=>{
                e.preventDefault();
                console.log(loginPhone,prdkg,prdname,prdprice,usernumber,locationorder);
                const response=await axios.post("http://localhost:3000/farmingordersubmit",{loginPhone,prdkg,prdname,prdprice,usernumber,locationorder})
                console.log(response.data)
                if(response.data=="Insufficient Packets Try For Less Quantity !"){
                    alert("Insufficient Packets Try For Less Quantity !")
                    navigate("/farmingmaterialsfacility")
                }
                if(response.data=="Order Placed"){
                alert("Order Placed")
                navigate("/farmingmaterialsfacility")
                }
                   }
            useEffect(()=>{
                fun()
            },[])
  return (
    <>
     <Navbar/>
         <div className="abouthead">
          <p>Farming Material Order Form</p>
         </div>
         <div className="rightSignup">
    <form method='post' onSubmit={handleFarmingOrderForm}  id='specialform'>
    <input type="text" placeholder='Product Name' id="fullnameSignup" value={prdname}/>
    <input type="text" placeholder='Your Phone Number' id='phoneSignup' onChange={(e)=>{setusernumber(e.target.value)}}/>
    <input type="text" placeholder='Packets(in Number)' id='passSignup' onChange={(e)=>{setprdkg(e.target.value)}}/>
    <input type="text" placeholder='Price Per Packets' id='passSignup' value={prdprice+' Per Packet'}/>
    <input type="text" placeholder='Location' id='passSignup' onChange={(e)=>{setlocationorder(e.target.value)}} value={locationorder}/>
    <button id='sameloc' onClick={handleLocation}>Same As Current Location</button>
    <input type="submit"  id='btnSignup' value='Place Order'/>
    </form>
    </div>
    </>
  )
}

export default Farmingorder
