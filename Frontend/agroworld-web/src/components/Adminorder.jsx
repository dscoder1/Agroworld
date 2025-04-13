import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminorder = () => {
   const[allvegetableorder,setallvegetableorder]=useState([])
   const[allcroporder,setallcroporder]=useState([])
   const[allseedorder,setallseedorder]=useState([])
   const[allproductorder,setallproductorder]=useState([])
   const[allfarmingorder,setallfarmingorder]=useState([])
  const fun=async()=>{
    const response=await axios.get("http://localhost:3000/allvegetableorder")
    setallvegetableorder(response.data)
    const response1=await axios.get("http://localhost:3000/allcroporder")
    setallcroporder(response1.data)
    const response2=await axios.get("http://localhost:3000/allseedorder")
    setallseedorder(response2.data)
    const response3=await axios.get("http://localhost:3000/allproductorder")
    setallproductorder(response3.data)
    const response4=await axios.get("http://localhost:3000/allfarmingorderadmin")
    setallfarmingorder(response4.data)
    }
    useEffect(()=>{
      fun();
    },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
        <p id='stock'>Vegetable Order</p>
     {allvegetableorder.map(values => (
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
 <a href={"allocatevegetableorder/"+values._id}><button id='orderbutton'>Allocate Order</button></a>

     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>

     <div className="PurchaseSeed">
        <p id='stock'>Crop Order</p>
     {allcroporder.map(values => (
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
 <a href={"allocatecroporder/"+values._id}><button id='orderbutton'>Allocate Order</button></a>
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>


     <div className="PurchaseSeed">
        <p id='stock'>Seed Order</p>
     {allseedorder.map(values => (
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
 <a href={"allocateseedorder/"+values._id}><button id='orderbutton'>Allocate Order</button></a>
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>


     <div className="PurchaseSeed">
        <p id='stock'>Product Order</p>
     {allproductorder.map(values => (
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
 <a href={"allocateproductorder/"+values._id}><button id='orderbutton'>Allocate Order</button></a>
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
     { allfarmingorder.length!=0 &&
     <div className="PurchaseSeed">
        <p id='stock'>Farming Material Order</p>
     {allfarmingorder.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Name : {values.Productname}</p>
 <p>Packets : {values.TotalPackets}</p>
 <p>Price/Packets : {values.Price}</p>
 <p>Ordered By : {values.UserPhone}</p>
 <p>Location : {values.Location}</p>
 <p>Status : {values.IsDone}</p>
 <a href={"allocatefarmingorder/"+values._id}><button id='orderbutton'>Allocate Order</button></a>
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

export default Adminorder
