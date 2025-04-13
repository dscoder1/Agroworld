import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminproduct = () => {
    const navigate=useNavigate();
    const[productnamedata,setproductnamedata]=useState("")
    const[gramdata,setgramdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const[msgdata,setmsgdata]=useState("")
    const [file, setFile] = useState("");
     const [allprddata,setallprddata]=useState([])
        const fun=async()=>{
    const response=await axios.post("http://localhost:3000/allprddata")
    console.log(response.data)
    setallprddata(response.data)
        }
       
     
    
       const handleProductForm=async(e)=>{
    e.preventDefault();
    console.log( gramdata,file,msgdata,productnamedata,pricedata);
    const response=await axios.post("http://localhost:3000/productadd",{gramdata,file,productnamedata,pricedata,msgdata},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Product Form Submitted"){
    alert("Product Form Submitted")
    navigate("/adminhome")
    }
    else{
       alert("Server Down !")
       navigate("/adminhome")
    
    }
       }
    
      useEffect(()=>{
        fun();
      },[])
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
      <p>Product Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleProductForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Product Name' id="fullnameSignup" onChange={(e)=>{setproductnamedata(e.target.value)}}/>
 
<input type="text" placeholder='Quantity(in Kg.)' id='passSignup' onChange={(e)=>{setgramdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Kg' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<textarea name="feed" id="prddesc" placeholder='Product Description' onChange={(e)=>{setmsgdata(e.target.value)}} required></textarea>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
<div className="PurchaseSeed">
    <p id='stock'>Products Stock</p>
     {allprddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Product Name : {values.Productname}</p>
 <p>Total Kg : {values.TotalKg}</p>
 <p>Price Per Kg : {values.Price}</p>
 <p>Desc : {values.Desc}</p>
 
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

export default Adminproduct
