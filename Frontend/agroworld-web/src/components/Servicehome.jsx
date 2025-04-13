import React from 'react'
import Servicenavbar from './Servicenavbar'
import SeedImage from '../assets/SeedImage.jpeg'
import VegetableImage from '../assets/vegetableImage.webp'
import CropImage from '../assets/CropImage.jpg'
const Servicehome = () => {
  return (
    <>
    <Servicenavbar/>
 <div className="mainhome">
        <div className="overlay"></div>
        <div className="lefthome">
          <h1 className="animated-text">Welcome to <span>Agro World.</span></h1>
          <p className="animated-text">Welcome to Agro World – Your Online Marketplace for Fresh Produce!

            At Agro World, we are dedicated to connecting farmers directly with consumers, making it easier than ever to buy and sell fresh vegetables and other agricultural products. Our platform empowers farmers to showcase their produce, including potatoes, tomatoes, and a variety of other vegetables, in a user-friendly online marketplace.</p>

          <a href="/about"><button className="explore-button">View More Details</button></a>
        </div>
        <div className="righthome">
          <img src="" alt="" />
        </div>
      </div>
      
    </>
  )
}

export default Servicehome
