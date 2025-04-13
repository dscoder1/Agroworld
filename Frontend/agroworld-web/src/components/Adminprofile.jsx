import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import MyOrder from '../assets/order.png'
import product from '../assets/healthy.png'
import axios from 'axios'
const Adminprofile = () => {
    const[allvegetableorderadmin,setallvegetableorderadmin]=useState([])
      const[allcroporderadmin,setallcroporderadmin]=useState([])
      const[allseedorderadmin,setallseedorderadmin]=useState([])
      const[allproductorderadmin,setallproductorderadmin]=useState([])
      const[allfarmingorderadmin,setallfarmingorderadmin]=useState([])
      const[allcroporderlengthadmin,setallcroporderlengthadmin]=useState(0)
      const[allseedorderlengthadmin,setallseedorderlengthadmin]=useState(0)
      const[allproductorderlengthadmin,setallproductorderlengthadmin]=useState(0)
      const[allfarmingorderlengthadmin,setallfarmingorderlengthadmin]=useState(0)
    const[allvegetableorderlengthadmin,setallvegetableorderlengthadmin]=useState([])
    const[allseedproductadmin,setallseedproductadmin]=useState([])
    const[allcropproductadmin,setallcropproductadmin]=useState([])
    const[allvegetableproductadmin,setallvegetableproductadmin]=useState([])
    const [alladminprddata,setalladminprddata]=useState([])
    const [alladminfarmingdata,setalladminfarmingdata]=useState([])
    const [alladminfarmingdatalength,setalladminfarmingdatalength]=useState(0)
    const [alladminprddatalength,setalladminprddatalength]=useState(0)
    const[allcropproductlengthadmin,setallcropproductlengthadmin]=useState(0)
    const[allseedproductlengthadmin,setallseedproductlengthadmin]=useState(0)
    const[allvegetableproductlengthadmin,setallvegetableproductlengthadmin]=useState(0)


    const[allseedallocatedadmin,setallseedallocatedadmin]=useState([])
    const[allcropallocatedadmin,setallcropallocatedadmin]=useState([])
    const[allvegetableallocatedadmin,setallvegetableallocatedadmin]=useState([])
    const [alladminprdallocated,setalladminprdallocated]=useState([])
    const [alladminfarmingallocated,setalladminfarmingallocated]=useState([])
    const [alladminfarmingallocatedlength,setalladminfarmingallocatedlength]=useState(0)
    const [alladminprdallocatedlength,setalladminprdallocatedlength]=useState(0)
    const[allcropallocatedlengthadmin,setallcropallocatedlengthadmin]=useState(0)
    const[allseedallocatedlengthadmin,setallseedallocatedlengthadmin]=useState(0)
    const[allvegetableallocatedlengthadmin,setallvegetableallocatedlengthadmin]=useState(0)

  const fun=async()=>{
      const response=await axios.get("http://localhost:3000/allvegetableorder")
      setallvegetableorderadmin(response.data)
      setallvegetableorderlengthadmin(response.data.length)
      const response1=await axios.get("http://localhost:3000/allcroporderadmin")
      setallcroporderadmin(response1.data)
      setallcroporderlengthadmin(response1.data.length)
      const response2=await axios.get("http://localhost:3000/allseedorderadmin")
      setallseedorderadmin(response2.data)
      setallseedorderlengthadmin(response2.data.length)
 
      const response3=await axios.get("http://localhost:3000/allproductorderadmin")
      setallproductorderadmin(response3.data)
      setallproductorderlengthadmin(response3.data.length)
      const response4=await axios.get("http://localhost:3000/allfarmingorderadmin")
      setallfarmingorderadmin(response4.data)
      setallfarmingorderlengthadmin(response4.data.length)

      const response5=await axios.post("http://localhost:3000/adminseedalldata")
      setallseedproductadmin(response5.data)
      setallseedproductlengthadmin(response5.data.length)
      const response6=await axios.post("http://localhost:3000/admincropalldata")
      setallcropproductadmin(response6.data)
      setallcropproductlengthadmin(response6.data.length)
      const response7=await axios.post("http://localhost:3000/adminvegetablealldata")
      setallvegetableproductadmin(response7.data)
      setallvegetableproductlengthadmin(response7.data.length)
      const response8=await axios.post("http://localhost:3000/allprddata")
      setalladminprddata(response8.data)
      setalladminprddatalength(response8.data.length)
         
      const response9=await axios.get("http://localhost:3000/allfarmingdata")
      setalladminfarmingdata(response9.data)
      setalladminfarmingdatalength(response9.data.length)


      const response10=await axios.get("http://localhost:3000/allallocatedseedorder")
      setallseedallocatedadmin(response10.data)
      setallseedallocatedlengthadmin(response10.data.length)

      const response11=await axios.get("http://localhost:3000/allallocatedcroporder")
      setallcropallocatedadmin(response11.data)
      setallcropallocatedlengthadmin(response11.data.length)

      const response12=await axios.get("http://localhost:3000/allallocatedvegetableorder")
      setallvegetableallocatedadmin(response12.data)
      setallvegetableallocatedlengthadmin(response12.data.length)

      const response13=await axios.get("http://localhost:3000/allallocatedproductorder")
      setalladminprdallocated(response13.data)
      setalladminprdallocatedlength(response13.data.length)

      const response14=await axios.get("http://localhost:3000/allallocatedotherorder")
      setalladminfarmingallocated(response14.data)
      setalladminfarmingallocatedlength(response14.data.length)
      }
      useEffect(()=>{
        fun();
      },[])
    return (
    
     <>
     <Adminnavbar/>
          <p id='stock'>Total Orders</p>
          <div className="firstboxprofile">
           <div className="serviceboxes">
             <p id='stockVal'>Seed Order</p>
     <img src={MyOrder} alt="Order Image"/>
             <p>Total Order: {allseedorderlengthadmin}</p>
              <a href="/adminprofileseed">seed order details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Vegetable Order</p>
     
           <img src={MyOrder} alt="Order Image"/>
           <p>Total Order: {allvegetableorderlengthadmin}</p>
     <a href="/adminprofilevegetable">vegetable order details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Crop Order</p>
           <img src={MyOrder} alt="Order Image"/>
           <p>Total Order: {allcroporderlengthadmin}</p>
     <a href="/adminprofilecrop">crop order details</a>
           </div>
           <div className="serviceboxes">
             <p id='stockVal'>Product Order</p>
           <img src={MyOrder} alt="Order Image"/>
           <p>Total Order: {allproductorderlengthadmin}</p>
     <a href="/adminprofileproduct">product order details</a>
           </div>
           <div className="serviceboxes">
             <p id='stockVal'>Other Order</p>
           <img src={MyOrder} alt="Order Image"/>
           <p>Total Order: {allfarmingorderlengthadmin}</p>
     <a href="/profilefarming">farming order details</a>
           </div>
          </div>
     
     
          <p id='stock'>Remaining Stock</p>
          <div className="firstboxprofile">
           <div className="serviceboxes">
             <p id='stockVal'>Seed Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {allseedproductlengthadmin}</p>
              <a href="/profileseedproductremainadmin">seed remain details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Vegetable Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allvegetableproductlengthadmin}</p>
     <a href="/profilevegetableproductremainadmin">vegetable remain details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Crop Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allcropproductlengthadmin}</p>
     <a href="/profilecropproductremainadmin">crop remain details</a>
           </div> 
           <div className="serviceboxes">
             <p id='stockVal'>Daily Usable Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {alladminprddatalength}</p>
              <a href="/alladminprddata">products remain details</a>
           </div>
           <div className="serviceboxes">
             <p id='stockVal'>Other Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {alladminfarmingdatalength}</p>
              <a href="/alladminotherdata">other remain details</a>
           </div>
           </div> 


           
          <p id='stock'>Allocated Order</p>
          <div className="firstboxprofile">
           <div className="serviceboxes">
             <p id='stockVal'>Seed Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {allseedallocatedlengthadmin}</p>
              <a href="/profileseedproductallocatedadmin">seed allocated details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Vegetable Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allvegetableallocatedlengthadmin}</p>
     <a href="/profilevegetableproductallocatedadmin">vegetable allocated details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Crop Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allcropallocatedlengthadmin}</p>
     <a href="/profilecropproductallocatedadmin">crop allocated details</a>
           </div> 
           <div className="serviceboxes">
             <p id='stockVal'>Daily Usable Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {alladminprdallocatedlength}</p>
              <a href="/profileproductallocatedadmin">products allocated details</a>
           </div>
           <div className="serviceboxes">
             <p id='stockVal'>Other Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {alladminfarmingallocatedlength}</p>
              <a href="/profilefarmingallocatedadmin">other allocated details</a>
           </div>
           </div> 
     </>
  )
}

export default Adminprofile
