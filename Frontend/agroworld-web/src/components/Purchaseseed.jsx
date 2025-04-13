import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import '../styles/Purchaseseed.css'
const Purchaseseed = () => {
    const [allseeddata,setallseeddata]=useState([])
    const fun=async()=>{
const response=await axios.post("http://localhost:3000/seedalldata")
console.log(response.data)
setallseeddata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Navbar/>
     <div className="PurchaseSeed">
     <p id='stock'>Seed Stock</p>

     {allseeddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Seed Name : {values.Seedname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Seller Contact : {values.UserPhone}</p>
 <a href={"seedorder/"+values._id}><button id='orderbutton'>Place Order</button></a>
 
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

export default Purchaseseed
