import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Profileseedprd = () => {
    const[allmyseedproduct,setallmyseedproduct]=useState([])
    const fun=async()=>{
        const response5=await axios.get("http://localhost:3000/userseedproduct")
        setallmyseedproduct(response5.data)
    }
   useEffect(()=>{
    fun();
   },[])
  return (
     <>
       <Navbar/>
     { allmyseedproduct.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Seed Products Data</p>
     {allmyseedproduct.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Seedname}</p>
 <p>Gram : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
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

export default Profileseedprd
