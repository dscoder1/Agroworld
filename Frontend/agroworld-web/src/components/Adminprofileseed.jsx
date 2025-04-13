import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminprofileseed = () => {
     
          const[allseedorderadmin,setallseedorderadmin]=useState([])
      const fun=async()=>{
          const response2=await axios.get("http://localhost:3000/allseedorderadmin")
          setallseedorderadmin(response2.data)
          }
          useEffect(()=>{
            fun();
          },[])
  return (
     <>
     <Adminnavbar/>
     { allseedorderadmin.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Seed Order</p>
     {allseedorderadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Seedname}</p>
 <p>Packets : {values.TotalPackets}</p>
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

export default Adminprofileseed
