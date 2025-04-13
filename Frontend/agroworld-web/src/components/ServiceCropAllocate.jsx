import React, { useEffect, useState } from 'react'
import Servicenavbar from './Servicenavbar'
import axios from 'axios'

const ServiceCropAllocate = () => {
     const[allseedallocatedadmin,setallseedallocatedadmin]=useState([])
        const fun=async()=>{
        const response10=await axios.get("http://localhost:3000/allallocatedcroporderservice")
        setallseedallocatedadmin(response10.data)
        }
        useEffect(()=>{
            fun()
        },[])
  return (
     <>
     <Servicenavbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Crop Allocation</p>
     {allseedallocatedadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Crop Name : {values.Cropname}</p>
 <p>Kg Ordered : {values.TotalKg}</p>
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
 <a href="/servicecropview" ><button id='orderbutton'>Order Done</button></a>

     </div>
     </div>
     </>
    ))}
     </div>
     </>
  )
}

export default ServiceCropAllocate
