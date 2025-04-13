import React from 'react'
import Adminnavbar from './Adminnavbar'
import SeedImage from '../assets/SeedImage.jpeg'
const Adminseedfacility = () => {
  return (
     <>
     <Adminnavbar/>
     <div className="abouthead">
           <p>Our Seed Service</p>
          </div>
          <div className="seedfacility">
             <div className="leftseedfacility">
             <img src={SeedImage} alt="Seed Image" />
     
             </div>
             <div className="rightseedfacility">
     <p>
     At Agro World, our seed service is dedicated to empowering both farmers and home gardeners by providing a comprehensive platform for buying and selling seeds for agricultural production and personal gardening. We offer a diverse selection of high-quality seeds, including vegetables, fruits, herbs, and flowers, sourced locally to ensure they thrive in your growing conditions. Farmers can easily sell their surplus seeds directly to consumers, contributing to the agricultural community while sharing their knowledge and expertise about various seed varieties and cultivation practices. For home gardeners, whether you’re a seasoned pro or just starting out, our platform provides the seeds you need to cultivate a flourishing garden, complete with detailed descriptions and growing tips to help you make informed choices. We are committed to promoting sustainability by encouraging the use of organic and heirloom seeds, supporting biodiversity, and fostering a sense of community among farmers and gardeners alike. Join us today to explore our seed service and take the first step towards a fruitful harvest, whether you’re looking to sell or eager to grow!
     </p>
             </div>
             </div>
             <div className="seedfacilitybtn">
                 <a href="/adminseeddata"><button>Seeds Details</button></a>
             </div>
     </>
  )
}

export default Adminseedfacility
