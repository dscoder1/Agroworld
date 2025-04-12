import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';

const Products = () => {
  
   const [allprddata,setallprddata]=useState([])
      const fun=async()=>{
  const response=await axios.post("http://localhost:3000/allprddata")
  console.log(response.data)
  setallprddata(response.data)
      }
  
    useEffect(()=>{
      fun();
    },[])
  return (
     <>
     <Navbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Products Stock</p>
     {allprddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Total Kg : {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
 <a href={"/productorder/"+values._id}><button id='orderbutton'>Place Order</button></a>
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

export default Products
