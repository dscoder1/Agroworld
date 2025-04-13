import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const SeedAllocatedAdmin = () => {
    const[allseedallocatedadmin,setallseedallocatedadmin]=useState([])
    const fun=async()=>{
    const response10=await axios.get("http://localhost:3000/allallocatedseedorder")
    setallseedallocatedadmin(response10.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Seed Allocation</p>
     {allseedallocatedadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Seed Name : {values.Seedname}</p>
 <p>Packet Ordered : {values.TotalPackets}</p>
 <p>Total Price : {values.Price}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Seller Contact : {values.SellerPhone}</p>
 <p>Ordered Contact : {values.OrderedPhone}</p>
 <p>Account Contact : {values.LoginUser}</p>
 <p>Allocater Contact : {values.AllocaterNumber}</p>
 <p>Location : {values.Location}</p>
 <p>Allocated Status : {values.IsDone}</p>
 <p>Allocated Date : {values.createdAt.split("T")[0]}</p>
 <p>Allocated Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
     </div>
     </div>
     </>
    ))}
     </div>
     
     </>
  )
}

export default SeedAllocatedAdmin
