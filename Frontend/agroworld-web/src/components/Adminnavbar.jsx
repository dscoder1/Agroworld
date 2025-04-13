import React from 'react'
import profile from '../assets/profile.png';
import logo from '../assets/farm.png';
import { NavLink } from 'react-router-dom';
const Adminnavbar = () => {
  return (
     <>
      <div className="navbarbox">
        <div className="left">
          <img src={logo} alt="Website Logo" id='weblogo' />
          <span id='agro'>Agro</span><span id='world'>World</span>
        </div>
        <div className="middle">
          <ul>
            <NavLink to="/adminhome" activeClassName="active-link">
              <li>Home</li>
            </NavLink>
            <NavLink to="/adminorder" activeClassName="active-link">
              <li>Orders</li>
            </NavLink>
            <NavLink to="/adminservice" activeClassName="active-link">
              <li>Service</li>
            </NavLink>
            <NavLink to="/adminaddfacility" activeClassName="active-link">
              <li>Add</li>
            </NavLink>

            <NavLink to="/adminproduct" activeClassName="active-link">
              <li>Products</li>
            </NavLink>
            <NavLink to="/adminfeedbox" activeClassName="active-link">
              <li>Feedbox</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <NavLink to="/adminprofile">
            <img src={profile} alt="Profile Image" id='profilephoto' />
          </NavLink>
        </div>
      </div>
     </>
  )
}

export default Adminnavbar
