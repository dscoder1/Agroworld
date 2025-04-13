import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminremainvegetable = () => {
    const[allvegetableproductadmin,setallvegetableproductadmin]=useState([])
           const fun=async()=>{
               const response5=await axios.post("http://localhost:3000/adminvegetablealldata")
               setallvegetableproductadmin(response5.data)
           }
              useEffect(()=>{
                       fun();
                     },[])
  return (
    <>
    <Adminnavbar/>
    <div className="PurchaseSeed">
    <p id='stock'>Vegetable Stock</p>
     {allvegetableproductadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Vegetable Name : {values.Vegetablename}</p>
 <p>Total Kg: {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Seller Contact : {values.UserPhone}</p>
 
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

export default Adminremainvegetable
