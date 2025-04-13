import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminseeddata = () => {
    const navigate=useNavigate();
    const [loginPhone,setloginPhone]=useState("")
    const[seednamedata,setseednamedata]=useState("")
    const[gramdata,setgramdata]=useState("")
    const[packetdata,setpacketdata]=useState("")
    const[pricedata,setpricedata]=useState("")
    const [file, setFile] = useState(""); 
    const [allseeddata,setallseeddata]=useState([])
    const fun=async()=>{
const response=await axios.post("http://localhost:3000/adminseedalldata")
console.log(response.data)
setallseeddata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])  
    
       const handleSeedSellForm=async(e)=>{
    e.preventDefault();
    console.log(loginPhone,packetdata,gramdata,file,seednamedata,pricedata);
    const response=await axios.post("http://localhost:3000/seedselldata",{seednamedata,loginPhone,gramdata,packetdata,pricedata,file},
       {
           headers: { "Content-Type": "multipart/form-data" },
         })
    console.log(response.data)
    if(response.data=="Seed Form Submitted"){
    alert("Seed Form Submitted")
    navigate("/adminseedfacility")
    }
    else{
       alert("Server Down !")
       navigate("/adminseedfacility")
    
    }
       }
    
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
      <p>Seed Selling Form</p>
     </div>
     <div className="rightSignup">
<form method='post' onSubmit={handleSeedSellForm} encType='multipart/form-data' id='specialform'>
<input type="text" placeholder='Seed Name' id="fullnameSignup" onChange={(e)=>{setseednamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' onChange={(e)=>{setloginPhone(e.target.value)}}/>
<input type="text" placeholder='Quantity Per Packet(in gram.)' id='passSignup' onChange={(e)=>{setgramdata(e.target.value)}}/>
{/* <label  id='photoLabelSignup' for="upload">Upload Profile Photo</label> */}
<input type="text" placeholder='Total Packet' id='passSignup' onChange={(e)=>{setpacketdata(e.target.value)}}/>
<input type="text" placeholder='Price Per Packet' id='passSignup' onChange={(e)=>{setpricedata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
</form>
</div>
<div className="PurchaseSeed">
    <p id='stock'>Seed Stock</p>
     {allseeddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Seed Name : {values.Seedname}</p>
 <p>Gram Per Packet : {values.Gram}</p>
 <p>Total Packets : {values.TotalPacket}</p>
 <p>Price Per Packet : {values.Price}</p>
 <p>Seller Contact : {values.UserPhone}</p>
 <p>Added Date : {values.createdAt.split("T")[0]}</p>
 <p>Added Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
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

export default Adminseeddata
