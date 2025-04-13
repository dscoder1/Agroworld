import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Profilecropprd = () => {
    const[allmycropproduct,setallmycropproduct]=useState([])
    const fun=async()=>{
        const response5=await axios.get("http://localhost:3000/usercropproduct")
        setallmycropproduct(response5.data)
    }
   useEffect(()=>{
    fun();
   },[])
  return (
    <>
     <Navbar/>
     { allmycropproduct.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Crop Products Data</p>
     {allmycropproduct.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Cropname}</p>
 <p>Total Kg : {values.TotalKg}</p>
 <p>Price : {values.Price}</p>
  
     </div>
     <div className="secondbox">
     <img src={`http://localhost:3000/files/${values.Photo}`} alt="Seed Image" />
        
     </div>
     </div>
     </>
    ))}
     </div>

   }
    </>
  )
}

export default Profilecropprd
