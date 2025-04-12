import React, { useEffect } from 'react'
import '../styles/Home.css'
import Navbar from './Navbar'
import axios from 'axios'
import SeedImage from '../assets/SeedImage.jpeg'
import VegetableImage from '../assets/vegetableImage.webp'
import CropImage from '../assets/CropImage.jpg'
import Contact from './Contact'
const Home = () => {
  const loginfound=async()=>{
const response=await axios.get("http://localhost:3000/loginuser")
console.log(response.data)
  }
  useEffect(()=>{
    loginfound();
  },[])
  return (
    <>
      <Navbar />
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
      <div className="paraHeadhome">
        <p>Our Services</p>
      </div>

      <div className="downhome">
        <div className="lefthomedown">
          <img src={SeedImage} alt="Seed Image" />
          <h4>Seed Facility</h4>
          <p>Connecting farmers to cultivate success, our platform empowers you to buy and sell quality seeds for thriving agricultural ventures.</p>
          <a href="/seedfacility"><button>View More Details</button></a>
        </div>
        <div className="middlehomedown">
        <img src={VegetableImage} alt="Vegetable Image" />
        <h4>Vegetable Facility</h4>
      
<p>Fresh from farm to table, our platform connects you with a vibrant selection of vegetables, ensuring quality and convenience for every meal.</p>
<a href="/vegetablefacility"><button>View More Details</button></a>
        </div>
        <div className="righthomedown">
        <img src={CropImage} alt="Seed Image" />
        <h4>Crop Facility</h4>
<p>Showcase your harvest or discover the perfect crop with ease—upload details and images to connect buyers and sellers in one seamless platform.</p>
<a href="/cropfacility"><button>View More Details</button>
</a>
        </div>
      </div>
    </>
  )
}

export default Home
