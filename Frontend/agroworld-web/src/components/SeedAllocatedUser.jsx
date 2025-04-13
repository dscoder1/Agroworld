import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const SeedAllocatedUser = () => {
    const[allseedallocatedadmin,setallseedallocatedadmin]=useState([])
    const fun=async()=>{
    const response10=await axios.get("http://localhost:3000/allallocatedseedorderuser")
    setallseedallocatedadmin(response10.data)
    }
    const btnClickReached= async(id) => {
      const response=await axios.post("http://localhost:3000/reachedallocatedseedorderuser",{id})
       
    };
    const btnClickNotReached= async(id) => {
      const response=await axios.post("http://localhost:3000/notreachedallocatedseedorderuser",{id})
       
    };
  
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Navbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Seed Allocation</p>
     {allseedallocatedadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Seed Name : {values.Seedname}</p>
 <p>Packet Ordered : {values.TotalPackets}</p>
 <p>Total Price : {values.Price}</p>
 <p>Seller Contact : {values.SellerPhone}</p>
 <p>Ordered Contact : {values.OrderedPhone}</p>
 <p>Account Contact : {values.LoginUser}</p>
 <p>Allocater Contact : {values.AllocaterNumber}</p>
 <p>Location : {values.Location}</p>
 <p>Allocated Status : {values.IsDone}</p>
 <p>Allocated Date : {values.createdAt.split("T")[0]}</p>
 <p>Allocated Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
 {
  values.DeliveryDone =="Yes" &&
  <>
  <p id='notification'>Notification For Order Success: </p>
   <a href="/profileseedproductallocateduser" ><button 
 id='orderbutton' onClick={() => btnClickReached(values._id)} >Reached</button></a>
 <a href="/profileseedproductallocateduser" ><button 
 id='orderbuttonnotreached' onClick={() => btnClickNotReached(values._id)} >Not Reached</button></a>
  </>
 
 }
     </div>
     </div>
     </>
    ))}
     </div>
     
     </>
  )
}

export default SeedAllocatedUser
