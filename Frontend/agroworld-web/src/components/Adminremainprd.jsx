import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminremainprd = () => {
    const[alladminprddata,setalladminprddata]=useState([])
    const fun=async()=>{
        const response8=await axios.post("http://localhost:3000/allprddata")
        setalladminprddata(response8.data)
    }
       useEffect(()=>{
                fun();
              },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Products Stock</p>
     {alladminprddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Total Kg : {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
 
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

export default Adminremainprd
