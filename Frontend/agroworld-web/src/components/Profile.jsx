import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import MyOrder from '../assets/order.png'
import '../styles/Profile.css'
import product from '../assets/healthy.png'
import axios from 'axios'
const Profile = () => {
  const[loginPhone,setloginPhone]=useState([])
  const[allmyvegetableorder,setallmyvegetableorder]=useState([])
    const[allmycroporder,setallmycroporder]=useState([])
    const[allmyseedorder,setallmyseedorder]=useState([])
    const[allmyproductorder,setallmyproductorder]=useState([])
    const[allmyfarmingorder,setallmyfarmingorder]=useState([])
    const[allmycroporderlength,setallmycroporderlength]=useState(0)
    const[allmyseedorderlength,setallmyseedorderlength]=useState(0)
    const[allmyproductorderlength,setallmyproductorderlength]=useState(0)
    const[allmyfarmingorderlength,setallmyfarmingorderlength]=useState(0)
  const[allmyvegetableorderlength,setallmyvegetableorderlength]=useState([])
  const[allmyseedproduct,setallmyseedproduct]=useState([])
  const[allmycropproduct,setallmycropproduct]=useState([])
  const[allmyvegetableproduct,setallmyvegetableproduct]=useState([])
  const[allmycropproductlength,setallmycropproductlength]=useState(0)
  const[allmyseedproductlength,setallmyseedproductlength]=useState(0)
  const[allmyvegetableproductlength,setallmyvegetableproductlength]=useState(0)
  
  
      const[allseedallocated,setallseedallocated]=useState([])
      const[allcropallocated,setallcropallocated]=useState([])
      const[allvegetableallocated,setallvegetableallocated]=useState([])
      const [allprdallocated,setallprdallocated]=useState([])
      const [allfarmingallocated,setallfarmingallocated]=useState([])
      const [allfarmingallocatedlength,setallfarmingallocatedlength]=useState(0)
      const [allprdallocatedlength,setallprdallocatedlength]=useState(0)
      const[allcropallocatedlength,setallcropallocatedlength]=useState(0)
      const[allseedallocatedlength,setallseedallocatedlength]=useState(0)
      const[allvegetableallocatedlength,setallvegetableallocatedlength]=useState(0)
      const [loginuser,setloginuser]=useState([])
  
   const fun=async()=>{
    const response10=await axios.get("http://localhost:3000/loginuser")
    console.log(response10.data[0].Phone)
    setloginPhone(response10.data[0].Phone)
     const response=await axios.get("http://localhost:3000/allmyvegetableorder")
     setallmyvegetableorder(response.data)
     setallmyvegetableorderlength(response.data.length)
     const response1=await axios.get("http://localhost:3000/allmycroporder")
     setallmycroporder(response1.data)
     setallmycroporderlength(response1.data.length)
     const response2=await axios.get("http://localhost:3000/allmyseedorder")
     setallmyseedorder(response2.data)
     setallmyseedorderlength(response1.data.length)

     const response3=await axios.get("http://localhost:3000/allmyproductorder")
     setallmyproductorder(response3.data)
     setallmyproductorderlength(response3.data.length)
     const response4=await axios.get("http://localhost:3000/allmyfarmingorder")
     setallmyfarmingorder(response4.data)
     setallmyfarmingorderlength(response4.data.length)
     const response5=await axios.get("http://localhost:3000/userseedproduct")
     setallmyseedproduct(response5.data)
     setallmyseedproductlength(response5.data.length)
     const response6=await axios.get("http://localhost:3000/usercropproduct")
     setallmycropproduct(response6.data)
     setallmycropproductlength(response6.data.length)
     const response7=await axios.get("http://localhost:3000/uservegetableproduct")
     setallmyvegetableproduct(response7.data)
     setallmyvegetableproductlength(response7.data.length)
     

     const response8=await axios.get("http://localhost:3000/allallocatedseedorderuser")
     setallseedallocated(response8.data)
     setallseedallocatedlength(response8.data.length)

     const response11=await axios.get("http://localhost:3000/allallocatedcroporderuser")
     setallcropallocated(response11.data)
     setallcropallocatedlength(response11.data.length)

     const response12=await axios.get("http://localhost:3000/allallocatedvegetableorderuser")
     setallvegetableallocated(response12.data)
     setallvegetableallocatedlength(response12.data.length)

     const response13=await axios.get("http://localhost:3000/allallocatedproductorderuser")
     setallprdallocated(response13.data)
     setallprdallocatedlength(response13.data.length)

     const response14=await axios.get("http://localhost:3000/allallocatedotherorderuser")
     setallfarmingallocated(response14.data)
     setallfarmingallocatedlength(response14.data.length)


     const response15=await axios.get("http://localhost:3000/loginData")
     setloginuser(response15.data)
     console.log(response15.data)


     }

     useEffect(()=>{
       fun();
     },[])
  return (
     <>
     <Navbar/>
     
     <div className="firstboxofprofilepage">
      <div className="leftbox">
     
      {loginuser.map(values => (
        <>
          <img src={`http://localhost:3000/files/${values.Photo}`} alt="Seed Image" id='loginphoto'/>
     </>
    ))}
      </div>
      <div className="rightbox">
      {loginuser.map(values => (
        <>
           <p>{values.Fullname}</p>
           <p>{values.Phone}</p>
           <a href="/"><button>Logout</button></a>
     </>
    ))}
      </div>
     </div>
     <p id='stock'>Our Orders</p>
     <div className="firstboxprofile">
      <div className="serviceboxes">
        <p id='stockVal'>Seed Order</p>
<img src={MyOrder} alt="Order Image"/>
        <p>Total Order: {allmyseedorderlength}</p>
         <a href="/profileseed">seed order details</a>
      </div>
      <div className="serviceboxes">
      <p id='stockVal'>Vegetable Order</p>

      <img src={MyOrder} alt="Order Image"/>
      <p>Total Order: {allmyvegetableorderlength}</p>
<a href="/profilevegetable">vegetable order details</a>
      </div>
      <div className="serviceboxes">
      <p id='stockVal'>Crop Order</p>
      <img src={MyOrder} alt="Order Image"/>
      <p>Total Order: {allmycroporderlength}</p>
<a href="/profilecrop">crop order details</a>
      </div>
      <div className="serviceboxes">
        <p id='stockVal'>Product Order</p>
      <img src={MyOrder} alt="Order Image"/>
      <p>Total Order: {allmyproductorderlength}</p>
<a href="/profileproduct">product order details</a>
      </div>
      <div className="serviceboxes">
        <p id='stockVal'>Other Order</p>
      <img src={MyOrder} alt="Order Image"/>
      <p>Total Order: {allmyfarmingorderlength}</p>
<a href="/profilefarming">farming order details</a>
      </div>
     </div>


     <p id='stock'>Our Products</p>
     <div className="firstboxprofile">
      <div className="serviceboxes">
        <p id='stockVal'>Seed Product</p>
<img src={product} alt="Product Image"/>
        <p>Total Product: {allmyseedproductlength}</p>
         <a href="/profileseedproduct">seed sell details</a>
      </div>
      <div className="serviceboxes">
      <p id='stockVal'>Vegetable Product</p>

      <img src={product} alt="Product Image"/>
      <p>Total Product: {allmyvegetableproductlength}</p>
<a href="/profilevegetableproduct">vegetable sell details</a>
      </div>
      <div className="serviceboxes">
      <p id='stockVal'>Crop Product</p>

      <img src={product} alt="Product Image"/>
      <p>Total Product: {allmycropproductlength}</p>
<a href="/profilecropproduct">crop sell details</a>
      </div>
      </div>




           
          <p id='stock'>Allocated Order</p>
          <div className="firstboxprofile">
           <div className="serviceboxes">
             <p id='stockVal'>Seed Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {allseedallocatedlength}</p>
              <a href="/profileseedproductallocateduser">seed allocated details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Vegetable Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allvegetableallocatedlength}</p>
     <a href="/profilevegetableproductallocateduser">vegetable allocated details</a>
           </div>
           <div className="serviceboxes">
           <p id='stockVal'>Crop Product</p>
     
           <img src={product} alt="Product Image"/>
           <p>Total Product: {allcropallocatedlength}</p>
     <a href="/profilecropproductallocateduser">crop allocated details</a>
           </div> 
           <div className="serviceboxes">
             <p id='stockVal'>Daily Usable Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {allprdallocatedlength}</p>
              <a href="/profileproductallocateduser">products allocated details</a>
           </div>
           <div className="serviceboxes">
             <p id='stockVal'>Other Product</p>
     <img src={product} alt="Product Image"/>
             <p>Total Product: {allfarmingallocatedlength}</p>
              <a href="/profilefarmingallocateduser">other allocated details</a>
           </div>
           </div> 

     </>
  )
}

export default Profile
