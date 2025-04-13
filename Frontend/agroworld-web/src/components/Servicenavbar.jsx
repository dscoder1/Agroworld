import React from 'react'
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css';
import profile from '../assets/profile.png';
import logo from '../assets/farm.png';
const Servicenavbar = () => {
  return (
     <>
     
      <div className="navbarbox">
             <div className="left">
               <img src={logo} alt="Website Logo" id='weblogo' />
               <span id='agro'>Agro</span><span id='world'>World</span>
             </div>
             <div className="middle">
               <ul>
                 <NavLink to="/servicehome" activeClassName="active-link">
                   <li>Home</li>
                 </NavLink>
                 <NavLink to="/contact" activeClassName="active-link">
                   <li>Contact</li>
                 </NavLink>
               </ul>
             </div>
             <div className="right">
               <NavLink to="/serviceprofile">
                 <img src={profile} alt="Profile Image" id='profilephoto' />
               </NavLink>
             </div>
           </div>
         </>
  )
}

export default Servicenavbar
