import React, { useEffect, useState } from 'react'
import Servicenavbar from './Servicenavbar'
import axios from 'axios'
import product from '../assets/healthy.png'
const ServiceProfile = () => {
    const [namedata,setnamedata]=useState("")
    const [phonedata,setphonedata]=useState("")
    const [photodata,setphotodata]=useState("")
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
    
     const fun=async()=>{
      const response10=await axios.get("http://localhost:3000/loginserviceuser")
      console.log(response10.data)
      setnamedata(response10.data.Fullname)
      setphonedata(response10.data.Phone)
      setphotodata(response10.data.Photo)
    
       const response8=await axios.get("http://localhost:3000/allallocatedseedorderservice")
       setallseedallocated(response8.data)
       setallseedallocatedlength(response8.data.length)
  
       const response11=await axios.get("http://localhost:3000/allallocatedcroporderservice")
       setallcropallocated(response11.data)
       setallcropallocatedlength(response11.data.length)
  
       const response12=await axios.get("http://localhost:3000/allallocatedvegetableorderservice")
       setallvegetableallocated(response12.data)
       setallvegetableallocatedlength(response12.data.length)
  
       const response13=await axios.get("http://localhost:3000/allallocatedproductorderservice")
       setallprdallocated(response13.data)
       setallprdallocatedlength(response13.data.length)
  
       const response14=await axios.get("http://localhost:3000/allallocatedotherorderservice")
       setallfarmingallocated(response14.data)
       setallfarmingallocatedlength(response14.data.length)
  
   
  
  
       }
  
       useEffect(()=>{
         fun();
       },[])
  return (
     <>
     <Servicenavbar/>
         
     <div className="firstboxofprofilepage">
      <div className="leftbox">
     
      
          <img src={`http://localhost:3000/files/${photodata}`} alt="Seed Image" id='loginphoto'/>
    
      </div>
      <div className="rightbox">
     
           <p>{namedata}</p>
           <p>{phonedata}</p>
           <a href="/servicelogin"><button>Logout</button></a>
    
      </div>
     </div>
               <p id='stock'>Allocated Order</p>
               <div className="firstboxprofile">
                <div className="serviceboxes">
                  <p id='stockVal'>Seed Product</p>
          <img src={product} alt="Product Image"/>
                  <p>Total Product: {allseedallocatedlength}</p>
                   <a href="/profileseedproductallocatedservice">seed allocated details</a>
                </div>
                <div className="serviceboxes">
                <p id='stockVal'>Vegetable Product</p>
          
                <img src={product} alt="Product Image"/>
                <p>Total Product: {allvegetableallocatedlength}</p>
          <a href="/profilevegetableproductallocatedservice">vegetable allocated details</a>
                </div>
                <div className="serviceboxes">
                <p id='stockVal'>Crop Product</p>
          
                <img src={product} alt="Product Image"/>
                <p>Total Product: {allcropallocatedlength}</p>
          <a href="/profilecropproductallocatedservice">crop allocated details</a>
                </div> 
                <div className="serviceboxes">
                  <p id='stockVal'>Daily Usable Product</p>
          <img src={product} alt="Product Image"/>
                  <p>Total Product: {allprdallocatedlength}</p>
                   <a href="/profileproductallocatedservice">products allocated details</a>
                </div>
                <div className="serviceboxes">
                  <p id='stockVal'>Other Product</p>
          <img src={product} alt="Product Image"/>
                  <p>Total Product: {allfarmingallocatedlength}</p>
                   <a href="/profilefarmingallocatedservice">other allocated details</a>
                </div>
                </div> 
     
     </>
  )
}

export default ServiceProfile
