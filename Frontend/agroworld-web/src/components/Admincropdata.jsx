import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admincropdata = () => {
    const navigate=useNavigate();
    const [loginPhone,setloginPhone]=useState("")
    const[cropnamedata,setcropnamedata]=useState("")
    const[kgdata,setkgdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const [file, setFile] = useState("");
    const [allcropdata,setallcropdata]=useState([])
            const fun=async()=>{
        const response=await axios.post("http://localhost:3000/admincropalldata")
        console.log(response.data)
        setallcropdata(response.data)
            }
            useEffect(()=>{
                fun()
            },[])
    
     
    
       const handleCropSellForm=async(e)=>{
    e.preventDefault();
    console.log(loginPhone,kgdata,file,cropnamedata,pricedata);
    const response=await axios.post("http://localhost:3000/cropselldata",{loginPhone,kgdata,file,cropnamedata,pricedata},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Crop Form Submitted"){
    alert("Crop Form Submitted")
    navigate("/admincropfacility")
    }
    else{
       alert("Server Down !")
       navigate("/admincropfacility")
    
    }
       }
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
      <p>Crop Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleCropSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Crop Name' id="fullnameSignup" onChange={(e)=>{setcropnamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' onChange={(e)=>{setloginPhone(e.target.value)}}/>
<input type="text" placeholder='Total kg(more than 50 kg)' id='passSignup' onChange={(e)=>{setkgdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
<div className="PurchaseSeed">
    <p id='stock'>Crop Stock</p>
     {allcropdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Crop Name : {values.Cropname}</p>
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

export default Admincropdata
