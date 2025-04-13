import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Purchasecrop = () => {
      const [allcropdata,setallcropdata]=useState([])
            const fun=async()=>{
        const response=await axios.post("http://localhost:3000/cropalldata")
        console.log(response.data)
        setallcropdata(response.data)
            }
            useEffect(()=>{
                fun()
            },[])
  return (
     <>
     <Navbar/>
     <div className="PurchaseSeed">
     <p id='stock'>Crop Stock</p>
     {allcropdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Crop Name : {values.Cropname}</p>
 <p>Total Kg: {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Seller Contact : {values.UserPhone}</p>
 <a href={"croporder/"+values._id}><button id='orderbutton'>Place Order</button></a>

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

export default Purchasecrop
