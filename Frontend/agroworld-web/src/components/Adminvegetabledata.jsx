import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminvegetabledata = () => {
    const navigate=useNavigate();
    const [loginPhone,setloginPhone]=useState("")
    const[vegetablenamedata,setvegetablenamedata]=useState("")
    const[kgdata,setkgdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const [file, setFile] = useState("");
    const [allvegetabledata,setallvegetabledata]=useState([])
    const fun=async()=>{
const response=await axios.post("http://localhost:3000/adminvegetablealldata")
console.log(response.data)
setallvegetabledata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])
    
     
    
       const handleCropSellForm=async(e)=>{
    e.preventDefault();
    console.log(loginPhone,kgdata,file,vegetablenamedata,pricedata);
    const response=await axios.post("http://localhost:3000/vegetableselldata",{loginPhone,kgdata,file,vegetablenamedata,pricedata},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Vegetable Form Submitted"){
    alert("Vegetable Form Submitted")
    navigate("/adminvegetablefacility")
    }
    else{
       alert("Server Down !")
       navigate("/adminvegetablefacility")
    
    }
       }
    
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
      <p>Vegetable Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleCropSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Crop Name' id="fullnameSignup" onChange={(e)=>{setvegetablenamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup'  onChange={(e)=>{setloginPhone(e.target.value)}}/>
<input type="text" placeholder='Total kg(more than 50 kg)' id='passSignup' onChange={(e)=>{setkgdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
<div className="PurchaseSeed">
    <p id='stock'>Vegetable Stock</p>
     {allvegetabledata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Vegetable Name : {values.Vegetablename}</p>
 <p>Total Kg: {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
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

export default Adminvegetabledata
