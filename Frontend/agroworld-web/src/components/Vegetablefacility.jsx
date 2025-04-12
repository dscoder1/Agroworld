import React from 'react'
import Navbar from './Navbar'
import VegetableImage from '../assets/vegetableImage.webp'

const Vegetablefacility = () => {
  return (
     <>
     <Navbar/>
     <div className="abouthead">
           <p>Our Vegetable Service</p>
          </div>
          <div className="seedfacility">
             <div className="leftseedfacility">
             <img src={VegetableImage} alt="Vegetable Image" />
     
             </div>
             <div className="rightseedfacility">
     <p>
     At Agro World, our vegetable service is designed to simplify the way you buy and sell fresh produce online. We provide a user-friendly platform where both farmers and consumers can connect directly, allowing farmers to sell their freshly harvested vegetables while giving consumers easy access to high-quality, locally-sourced produce. With our convenient "Add to Cart" feature, you can browse a wide variety of vegetables, from staple items like potatoes and tomatoes to seasonal specialties, and purchase them with just a few clicks. Our cash-on-delivery system ensures a hassle-free shopping experience, allowing you to pay for your order upon delivery, giving you peace of mind. Whether you’re a farmer looking to reach a broader audience or a consumer seeking fresh ingredients for your meals, our vegetable service is here to support your needs. Join us today and experience the convenience of farm-fresh vegetables delivered right to your doorstep!
     </p>
             </div>
                          
                       </div>
                       <div className="seedfacilitybtn">
            <a href="/sellvegetable"><button>Sell Vegetable</button></a>
            <a href="/purchasevegetable"><button>Purchase Vegetable</button></a>
        </div>
     </>
  )
}

export default Vegetablefacility
