import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Vegetableorderallocate = () => {
        const [allboydata,setallboydata]=useState([])

 const{id}=useParams()
    const navigate=useNavigate()
    const[vegetablename,setvegetablename]=useState("")
    const[vegetablekg,setvegetablekg]=useState("")
    const[vegetableprice,setvegetableprice]=useState("")
    const[vegetablesellernumber,setvegetablesellernumber]=useState("")
    const[vegetablebuyernumber,setvegetablebuyernumber]=useState("")
    const[vegetableallocaternumber,setvegetableallocaternumber]=useState("")
    const [locationorder,setlocationorder]=useState("")
    const [iddata,setiddata]=useState("")
    const [logindata,setlogindata]=useState("")

            const fun=async()=>{
                const response2=await axios.get("http://localhost:3000/alldboydata")
                console.log(response2.data)
                setallboydata(response2.data)
        const response=await axios.get(`http://localhost:3000/allocatevegetableorder/${id}`)
        console.log(response.data)
        console.log(response.data[0].Vegetablename)
        setlogindata(response.data[0].LoginUser)
        setvegetablename(response.data[0].Vegetablename)
        // setvegetableprice(response.data.Price)
        setiddata(response.data[0]._id)
        setvegetablekg(response.data[0].TotalKg)
        setvegetablesellernumber(response.data[0].SellerPhone)
        setlocationorder(response.data[0].Location)
        setvegetableprice(response.data[0].Price)
        setvegetablebuyernumber(response.data[0].UserPhone)
          
            }        
    const handleVegetableAllocateForm=async(e)=>{
                e.preventDefault();
                console.log( vegetablekg,vegetablename,vegetableprice,vegetablesellernumber,locationorder,vegetableallocaternumber,vegetablebuyernumber);
                const response=await axios.post("http://localhost:3000/allocatevegetableorder",{vegetablekg,vegetablename,vegetableprice,vegetablesellernumber,locationorder,vegetableallocaternumber,vegetablebuyernumber,iddata,logindata})
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
<form method='post' onSubmit={handleVegetableAllocateForm}  id='specialform'>
<input type="text" placeholder='Vegetable Name' id="fullnameSignup" value={vegetablename}/>
<input type="text" placeholder='Vegetable Quantity' id="fullnameSignup" value={vegetablekg+" Kg"}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' value={vegetableprice+' Per Kg'}/>
<input type="text" placeholder='Location' id='passSignup' value={locationorder}/>
<input type="text" placeholder='Your Phone Number' id='phoneSignup' value={vegetablebuyernumber+" Ordered By"}/>
<input type="text" placeholder='Seller Phone Number' id='phoneSignup' value={vegetablesellernumber+" Seller Number"}/>
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

export default Vegetableorderallocate
