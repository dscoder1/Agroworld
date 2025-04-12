import React from 'react'
import Navbar from './Navbar'
import '../styles/About.css'
const About = () => {
  return (
     <>
     <Navbar/>
     <div className="abouthead">
      <p>About Web</p>
     </div>
     <div className="aboutSection">
     <h4>Welcome to Agro World:</h4> 
      <li>Your one-stop online marketplace connecting farmers and consumers.</li>
      <h4>Our Mission:</h4>
<li>Empower farmers by providing a platform to sell fresh produce directly to consumers, making it easy for you to access high-quality crops and seeds from home.
</li>
<h4>Our Vision:</h4>
  <li>Foster a thriving agricultural community.</li>
  <li>Support sustainable farming practices.</li>
  <li>Promote healthy eating habits by connecting consumers with local food sources.</li>

<h4>What We Offer:</h4>
<li>A dedicated space for farmers to list their crops.</li>
<li>Access to a variety of fresh vegetables, fruits, and herbs.</li>
<li>User-friendly interface for easy browsing and ordering.</li>
<li>Cash-on-delivery service for hassle-free shopping from home.</li>
<li>Platform for buying and selling a variety of seeds.</li>
<li>Supports both seasoned gardeners and beginners.</li>
<h4>Our Commitment:</h4>
<li>Support local farmers and promote sustainable agriculture.</li>
<li>Contribute to the livelihoods of farmers in your community.</li>
<li>Create a more sustainable food system that benefits everyone.</li>
<h4>Join Us: </h4>
  <li>Explore our marketplace today and experience the freshness of farm-to-table like never before!</li>


     </div>
     </>
  )
}

export default About
