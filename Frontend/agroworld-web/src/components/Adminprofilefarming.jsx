import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminprofilefarming = () => {
    const[allfarmingorderadmin,setallfarmingorderadmin]=useState([])
const fun=async()=>{
     const response4=await axios.get("http://localhost:3000/allfarmingorderadmin")
              setallfarmingorderadmin(response4.data)
}
                 useEffect(()=>{
                          fun();
                        },[])
  return (
     <>
     <Adminnavbar/>
     { allfarmingorderadmin.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Farming Material Order</p>
     {allfarmingorderadmin.map(values => (
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

export default Adminprofilefarming
