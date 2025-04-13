import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Profilevegetableprd = () => {
     const[allmyvegetableproduct,setallmyvegetableproduct]=useState([])
        const fun=async()=>{
            const response5=await axios.get("http://localhost:3000/uservegetableproduct")
            setallmyvegetableproduct(response5.data)
        }
       useEffect(()=>{
        fun();
       },[])
  return (
     <>
          <Navbar/>
     { allmyvegetableproduct.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Products Data</p>
     {allmyvegetableproduct.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Vegetablename}</p>
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

export default Profilevegetableprd
