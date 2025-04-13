import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminremaincrop = () => {
   const[allcropproductadmin,setallcropproductadmin]=useState([])
          const fun=async()=>{
              const response5=await axios.post("http://localhost:3000/admincropalldata")
              setallcropproductadmin(response5.data)
          }
             useEffect(()=>{
                      fun();
                    },[])
  return (
    
    <>
    <Adminnavbar/>
    <div className="PurchaseSeed">
    <p id='stock'>Crop Stock</p>
     {allcropproductadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Crop Name : {values.Cropname}</p>
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

export default Adminremaincrop
