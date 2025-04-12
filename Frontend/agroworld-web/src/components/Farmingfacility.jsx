import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Farmingfacility = () => {
    const [allfarmingdata,setallfarmingdata]=useState([])
    const fun=async()=>{
const response=await axios.get("http://localhost:3000/allfarmingdata")
console.log(response.data)
setallfarmingdata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
    <>
    <Navbar/>
    
<div className="PurchaseSeed">
     <p id='stock'>Products Stock</p>
     {allfarmingdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
 <a href={"farmingorder/"+values._id}><button id='orderbutton'>Place Order</button></a>
 
     </div>
     <div className="secondbox">
     <img src={`http://localhost:3000/files/${values.Photo}`} alt="Seed Image" />
     </div>
     </div>
     </>
    ))}
     </div>
    </>
  )
}

export default Farmingfacility
