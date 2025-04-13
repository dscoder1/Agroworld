import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Servicenavbar from './Servicenavbar'

const ServiceSeedAllocate = () => {
     const[allseedallocatedadmin,setallseedallocatedadmin]=useState([])
        const fun=async()=>{
        const response10=await axios.get("http://localhost:3000/allallocatedseedorderservice")
        setallseedallocatedadmin(response10.data)
        }
        const btnClick = async(id) => {
         const response=await axios.post("http://localhost:3000/updateallocatedseedorderservice",{id})
         console.log('Order ID:', id);
          
       };
     
        useEffect(()=>{
            fun()
        },[])
  return (
     <>
     <Servicenavbar/>
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
 <p>Order Status : {values.DeliveryDone}</p>
 <p>Allocated Date : {values.createdAt.split("T")[0]}</p>
 <p>Allocated Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
 { values.DeliveryDone =="No" && 
 <a href="/profileseedproductallocatedservice" ><button 
 id='orderbutton' onClick={() => btnClick(values._id)}>Order Done</button></a>
}

     </div>
     </div>
     </>
    ))}
     </div>
     
     </>
  )
}

export default ServiceSeedAllocate
