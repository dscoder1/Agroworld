import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminprofileproduct = () => {
    const[allproductorderadmin,setallproductorderadmin]=useState([])
    const fun=async()=>{
    const response3=await axios.get("http://localhost:3000/allproductorderadmin")
    setallproductorderadmin(response3.data)
    }
       useEffect(()=>{
                fun();
              },[])
  return (
    <>
    <Adminnavbar/>
    { allproductorderadmin.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Product Order</p>
     {allproductorderadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Productname}</p>
 <p>Quantity : {values.TotalKg}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Description : {values.Desc}</p>
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

export default Adminprofileproduct
