import React, { useEffect, useState } from 'react'
import Adminnavbar from './Adminnavbar'
import axios from 'axios'

const Adminfeedbox = () => {
    const [allfeeddata,setallfeeddata]=useState([])
    const fun=async()=>{
const response=await axios.post("http://localhost:3000/allfeeddata")
console.log(response.data)
setallfeeddata(response.data)
    }
    useEffect(()=>{
        fun()
    },[])
  return (
     <>
     <Adminnavbar/>
     <div className="PurchaseSeed">
        <p id='stock'>User Feedback</p>
     {allfeeddata.map(values => (
        <>
         <div className="eachbox">
          <div className="firstbox">
          <p>Sender Email : {values.Email}</p>
 <p>Sender Phone : {values.LoginPhone}</p>
 <p>Message : {values.Message}</p>
  
     </div>
     <div className="secondbox">
     </div>
     </div>
     </>
    ))}
     </div>
     </>
  )
}

export default Adminfeedbox
