import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Profilefarming = () => {
    const[allmyfarmingorder,setallmyfarmingorder]=useState([])
   const fun=async()=>{
     const response4=await axios.get("http://localhost:3000/allmyfarmingorder")
     setallmyfarmingorder(response4.data)
     }
     useEffect(()=>{
       fun();
     },[])
  return (
     <>
     <Navbar/>
     { allmyfarmingorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Farming Material Order</p>
     {allmyfarmingorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Productname}</p>
 <p>Packets : {values.TotalPackets}</p>
 <p>Price/Packets : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
}
     </>
  )
}

export default Profilefarming
