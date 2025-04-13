import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminremainother = () => {
    const [alladminotherdata,setalladminotherdata]=useState([])
    const fun=async()=>{
    const response9=await axios.get("http://localhost:3000/allfarmingdata")
    setalladminotherdata(response9.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
     <p id='stock'>Products Stock</p>
     {alladminotherdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
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

export default Adminremainother
