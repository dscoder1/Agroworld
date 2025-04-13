import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Myorder = () => {
    const[allmyvegetableorder,setallmyvegetableorder]=useState([])
    const[allmycroporder,setallmycroporder]=useState([])
    const[allmyseedorder,setallmyseedorder]=useState([])
    const[allmyproductorder,setallmyproductorder]=useState([])
    const[allmyfarmingorder,setallmyfarmingorder]=useState([])
   const fun=async()=>{
     const response=await axios.get("http://localhost:3000/allmyvegetableorder")
     setallmyvegetableorder(response.data)
     const response1=await axios.get("http://localhost:3000/allmycroporder")
     setallmycroporder(response1.data)
     const response2=await axios.get("http://localhost:3000/allmyseedorder")
     setallmyseedorder(response2.data)
     const response3=await axios.get("http://localhost:3000/allmyproductorder")
     setallmyproductorder(response3.data)
     const response4=await axios.get("http://localhost:3000/allmyfarmingorder")
     setallmyfarmingorder(response4.data)
     }
     useEffect(()=>{
       fun();
     },[])
  return (
     <>
     <Navbar/>
     { allmyvegetableorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Order</p>
     {allmyvegetableorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Vegetablename}</p>
 <p>Quantity : {values.TotalKg}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Seller : {values.SellerPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
}
{ allmycroporder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Crop Order</p>
     {allmycroporder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Cropname}</p>
 <p>Quantity : {values.TotalKg}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Seller : {values.SellerPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>

   }
   { allmyseedorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Seed Order</p>
     {allmyseedorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Seedname}</p>
 <p>Packets : {values.TotalPackets}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Seller : {values.SellerPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>

   }
   { allmyproductorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Product Order</p>
     {allmyproductorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Productname}</p>
 <p>Quantity : {values.TotalKg}</p>
 <p>Price/Kg : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Description : {values.Desc}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
}
{ allmyfarmingorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Farming Material Order</p>
     {allmyfarmingorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Productname}</p>
 <p>Packets : {values.TotalPackets}</p>
 <p>Price/Packets : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
}
     </>
  )
}

export default Myorder
