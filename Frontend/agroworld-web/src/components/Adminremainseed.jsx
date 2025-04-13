import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminremainseed = () => {
      const[allseedproductadmin,setallseedproductadmin]=useState([])
        const fun=async()=>{
            const response5=await axios.post("http://localhost:3000/adminseedalldata")
            setallseedproductadmin(response5.data)
        }
           useEffect(()=>{
                    fun();
                  },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
    <p id='stock'>Seed Stock</p>
     {allseedproductadmin.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Seed Name : {values.Seedname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
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

export default Adminremainseed
