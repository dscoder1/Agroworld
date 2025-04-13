import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminprofilecrop = () => {
    const[allcroporderadmin,setallcroporderadmin]=useState([])
    const fun=async()=>{
    const response1=await axios.get("http://localhost:3000/allcroporderadmin")
    setallcroporderadmin(response1.data)
    }
       useEffect(()=>{
                fun();
              },[])
  return (
     <>
     <Adminnavbar/>
     { allcroporderadmin.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Crop Order</p>
     {allcroporderadmin.map(values => (
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

export default Adminprofilecrop
