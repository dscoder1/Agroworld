import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminprofilevegetable = () => {
    const[allvegetableorderadmin,setallvegetableorderadmin]=useState([])
const fun=async()=>{
    const response=await axios.get("http://localhost:3000/allvegetableorder")
    setallvegetableorderadmin(response.data)
}
       useEffect(()=>{
                fun();
              },[])
  return (
     <>
     <Adminnavbar/>
     { allvegetableorderadmin.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Order</p>
     {allvegetableorderadmin.map(values => (
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

export default Adminprofilevegetable
