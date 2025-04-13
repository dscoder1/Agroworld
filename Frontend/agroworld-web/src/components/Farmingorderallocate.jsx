import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Farmingorderallocate = () => {
    const [allboydata,setallboydata]=useState([])

    const{id}=useParams()
       const navigate=useNavigate()
       const[iddata,setiddata]=useState("")
       const[vegetablename,setvegetablename]=useState("")
       const[vegetablekg,setvegetablekg]=useState("")
       const[vegetableprice,setvegetableprice]=useState("")
       const[vegetablesellernumber,setvegetablesellernumber]=useState("")
       const[vegetablebuyernumber,setvegetablebuyernumber]=useState("")
       const[vegetableallocaternumber,setvegetableallocaternumber]=useState("")
       const [locationorder,setlocationorder]=useState("")
       const [logindata,setlogindata]=useState("")
   
               const fun=async()=>{
                   const response2=await axios.get("http://localhost:3000/alldboydata")
                   console.log(response2.data)
                   setallboydata(response2.data)
           const response=await axios.get(`http://localhost:3000/allocatefarmingorder/${id}`)
           console.log(response.data)
           console.log(response.data[0].Productname)
           setvegetablename(response.data[0].Productname)
           setiddata(response.data[0]._id)
           // setvegetableprice(response.data.Price)
           setlogindata(response.data[0].LoginUser)
           setvegetablekg(response.data[0].TotalPackets)
           setlocationorder(response.data[0].Location)
           setvegetableprice(response.data[0].Price)
           setvegetablebuyernumber(response.data[0].UserPhone)
             
               }        
       const handleSeedAllocateForm=async(e)=>{
                   e.preventDefault();
                   console.log( vegetablekg,vegetablename,vegetableprice,locationorder,vegetableallocaternumber,vegetablebuyernumber);
                   const response=await axios.post("http://localhost:3000/allocatefarmingorder",{vegetablekg,vegetablename,vegetableprice,locationorder,vegetableallocaternumber,vegetablebuyernumber,iddata,logindata})
                   console.log(response.data)
                   if(response.data=="Order Allocated"){
                   alert("Order Allocated")
                   navigate("/adminorder")
                   }
                   else{
                       alert("Server Down Try Again !")
                   navigate("/adminorder")
                   }
                      }
              
   
          
      
           
           useEffect(()=>{
               fun()
           },[])
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
      <p>Vegetable Allocation Form</p>
      <br /><br /><br /> 
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleSeedAllocateForm}  id='specialform'>
<input type="text" placeholder='Seed Name' id="fullnameSignup" value={vegetablename}/>
<input type="text" placeholder='Seed Quantity' id="fullnameSignup" value={vegetablekg+" Packets"}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' value={vegetableprice+' Per Packet'}/>
<input type="text" placeholder='Location' id='passSignup' value={locationorder}/>
<input type="text" placeholder='Your Phone Number' id='phoneSignup' value={vegetablebuyernumber+" Ordered By"}/>
<input type="text" placeholder='Allocater Phone Number' id='phoneSignup'  onChange={(e)=>{setvegetableallocaternumber(e.target.value)}}/>
<input type="submit"  id='btnSignup' value='Allocate Order'/>
</form>
</div>
<br /><br />
   <div className="PurchaseSeed">
     <p id='stock'>Service Man</p>
     {allboydata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Full Name : {values.Fullname}</p>
 <p>Phone : {values.Phone}</p>
 <p>Join Date : {values.createdAt.split("T")[0]}</p>
 <p>Join Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
  
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

export default Farmingorderallocate
