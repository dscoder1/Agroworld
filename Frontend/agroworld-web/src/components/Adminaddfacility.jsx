import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Adminnavbar from './Adminnavbar';
import '../styles/Adminadd.css'
const Adminaddfacility = () => {
    const navigate=useNavigate();
    const[fullnamedata,setfullnamedata]=useState("")
    const[phonedata,setphonedata]=useState("")
    const[passworddata,setpassworddata]=useState("")
    const [file, setFile] = useState("");
    const [usertypedata, setusertypedata] = useState("");
 
    const handleSignupForm=async(e)=>{
 e.preventDefault();
 console.log(phonedata,passworddata,file,usertypedata,fullnamedata);
 if(usertypedata=="User"){
 const response=await axios.post("http://localhost:3000/userdata",{fullnamedata,phonedata,passworddata,file,usertypedata},
    {
        headers: { "Content-Type": "multipart/form-data" },
      })
 console.log(response.data)
 if(response.data=="Account Created"){
 alert("Account Created")
 navigate("/adminservice")
 }
 else{
    alert("Server Down !")
    navigate("/adminservice")
 
 }
}
if(usertypedata=="ServiceMan"){
    const response=await axios.post("http://localhost:3000/dboydata",{fullnamedata,phonedata,passworddata,file,usertypedata},
        {
            headers: { "Content-Type": "multipart/form-data" },
          })
     console.log(response.data)
     if(response.data=="Account Created"){
     alert("Account Created")
     navigate("/adminservice")
     }
     else{
        alert("Server Down !")
        navigate("/adminservice")
     
     }   
}
    }
    const [alluserdata,setalluserdata]=useState([])
    const [allboydata,setallboydata]=useState([])
    const fun=async()=>{
const response1=await axios.get("http://localhost:3000/alluserdata")
console.log(response1.data)
setalluserdata(response1.data)
const response2=await axios.get("http://localhost:3000/alldboydata")
console.log(response2.data)
setallboydata(response2.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Adminnavbar/>
      <div className="upperSignup">
<div className="mainSignup">
   <div className="leftSignup">
   </div>
   <div className="rightSignup">
<form method='post' onSubmit={handleSignupForm} encType='multipart/form-data'>
<p id='addhead'>Add Form Page</p>
<select name="degree" id="degree" onChange={(e) => { setusertypedata(e.target.value) }}>
                        <option value="select_degree_type">Select User Type</option>
                        <option value="User">User</option>
                        <option value="ServiceMan">DBoy</option>

                    </select>
                   

<input type="text" placeholder='Fullname' id="fullnameSignup" onChange={(e)=>{setfullnamedata(e.target.value)}}/>
<input type="text" placeholder='Phone Number' id='phoneSignup' onChange={(e)=>{setphonedata(e.target.value)}}/>
<input type="password" placeholder='Password' id='passSignup' onChange={(e)=>{setpassworddata(e.target.value)}}/>
<input type="file" id="photoSignup"  onChange={(e)=>{setFile(e.target.files[0])}} name='file'/>
<input type="submit"  id='btnSignup'/>
<a href="/" id='accountcreatehead'><p>login ?</p></a>
</form>
</div>
</div>
</div>

<div className="PurchaseSeed">
     <p id='stock'>User Data</p>
     {alluserdata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Full Name : {values.Fullname}</p>
          <p>Phone : {values.Phone}</p>
          <p>Creation Date : {values.createdAt.split("T")[0]}</p>
          <p>Creation Time : {values.createdAt.split("T")[1].slice(0, 8)}</p>
     </div>
     <div className="secondbox">
     <img src={`http://localhost:3000/files/${values.Photo}`} alt="Seed Image" />
     </div>
     </div>
     </>
    ))}
     </div>

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

export default Adminaddfacility
