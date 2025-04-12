// import React from 'react'
// import '../styles/Navbar.css'
// import profile from '../assets/profile.png'
// import logo from '../assets/farm.png'
// const Navbar = () => {
//   return (
//      <>
//      <div className="navbarbox">
//         <div className="left">
//             <img src={logo} alt="Website Logo" id='weblogo'/>
//             <p>Farmino</p>
//         </div>
//         <div className="middle">
// <ul>
//     <a href="/home"><li>Home</li></a>
//     <a href="about"><li>About</li></a>
//     <a href="service"><li>Service</li></a>
//     <a href="product"><li>Products</li></a>
//     <a href="contact"><li>Contact</li></a>
// </ul>
//         </div>
//         <div className="right">
//             <a href="/profile"><img src={profile} alt="Profile Image" id='profilephoto'/></a>
//         </div>
//      </div>
//      </>
//   )
// }

// export default Navbar



import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import '../styles/Navbar.css';
import profile from '../assets/profile.png';
import logo from '../assets/farm.png';

const Navbar = () => {
  return (
    <>
      <div className="navbarbox">
        <div className="left">
          <img src={logo} alt="Website Logo" id='weblogo' />
          <span id='agro'>Agro</span><span id='world'>World</span>
        </div>
        <div className="middle">
          <ul>
            <NavLink to="/home" activeClassName="active-link">
              <li>Home</li>
            </NavLink>
            <NavLink to="/about" activeClassName="active-link">
              <li>About</li>
            </NavLink>
            <NavLink to="/service" activeClassName="active-link">
              <li>Service</li>
            </NavLink>
            <NavLink to="/product" activeClassName="active-link">
              <li>Products</li>
            </NavLink>
            <NavLink to="/contact" activeClassName="active-link">
              <li>Contact</li>
            </NavLink>
            <NavLink to="/myorder" activeClassName="active-link">
              <li>MyOrder</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <NavLink to="/profile">
            <img src={profile} alt="Profile Image" id='profilephoto' />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;