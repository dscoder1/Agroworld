import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Purchasevegetable = () => {
      const [allvegetabledata,setallvegetabledata]=useState([])
        const fun=async()=>{
    const response=await axios.post("http://localhost:3000/vegetablealldata")
    console.log(response.data)
    setallvegetabledata(response.data)
        }
        useEffect(()=>{
            fun()
        },[])
  return (
     <>
     <Navbar/>
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Stock</p>
     {allvegetabledata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Vegetable Name : {values.Vegetablename}</p>
 <p>Total Kg: {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Seller Contact : {values.UserPhone}</p>
 <a href={"/vegetableorder/"+values._id}><button id='orderbutton'>Place Order</button></a>
 
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

export default Purchasevegetable
