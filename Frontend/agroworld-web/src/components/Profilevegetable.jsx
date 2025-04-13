import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Profilevegetable = () => {
    const[allmyvegetableorder,setallmyvegetableorder]=useState([])
   const fun=async()=>{
     const response=await axios.get("http://localhost:3000/allmyvegetableorder")
     setallmyvegetableorder(response.data)
     }
     useEffect(()=>{
       fun();
     },[])
  return (
     <>
     <Navbar/>
      { allmyvegetableorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Order</p>
     {allmyvegetableorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Vegetablename}</p>
 <p>Quantity : {values.TotalKg}</p>
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

export default Profilevegetable
