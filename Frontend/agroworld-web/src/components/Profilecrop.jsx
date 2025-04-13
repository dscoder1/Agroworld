import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Profilecrop = () => {
        const[allmycroporder,setallmycroporder]=useState([])
       const fun=async()=>{
         const response1=await axios.get("http://localhost:3000/allmycroporder")
         setallmycroporder(response1.data)
       }
         useEffect(()=>{
           fun();
         },[])
  return (
     <>
     <Navbar/>
     { allmycroporder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Crop Order</p>
     {allmycroporder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Cropname}</p>
 <p>Quantity : {values.TotalKg}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Seller : {values.SellerPhone}</p>
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

export default Profilecrop
