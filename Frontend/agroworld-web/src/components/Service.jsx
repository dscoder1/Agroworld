import React from 'react'
import Navbar from './Navbar'
import SeedImage from '../assets/SeedImage.jpeg'
import VegetableImage from '../assets/vegetableImage.webp'
import CropImage from '../assets/CropImage.jpg'
import '../styles/Service.css'
import Farmingmat from '../assets/farmingmat.jpg'
const Service = () => {
  return (
     <>
     <Navbar/>
     <div className="servicehead">
      <p>Our Service</p>
     </div>
     <div className="downservice">
     <div className="downhome">
             <div className="lefthomedown">
               <img src={SeedImage} alt="Seed Image" />
               <h4>Seed Facility</h4>
               <p>Connecting farmers to cultivate success, our platform empowers you to buy and sell quality seeds for thriving agricultural ventures.</p>
               <a href="/seedfacility"><button>View More Details</button>
</a>
             </div>
             <div className="middlehomedown">
             <img src={VegetableImage} alt="Vegetable Image" />
             <h4>Vegetable Facility</h4>
           
     <p>Fresh from farm to table, our platform connects you with a vibrant selection of vegetables, ensuring quality and convenience for every meal.</p>
     <a href="/vegetablefacility"><button>View More Details</button>
</a>
             </div>
             <div className="righthomedown">
             <img src={CropImage} alt="Crop Image" />
             <h4>Crop Facility</h4>
     <p>Showcase your harvest or discover the perfect crop with ease—upload details and images to connect buyers and sellers in one seamless platform.</p>
     <a href="/cropfacility"><button>View More Details</button>
</a>
     
             </div>
             <div className="righthomedown">
             <img src={Farmingmat} alt="Material Image" />
             <h4>Farming Materials</h4>
     <p>Empowering farmers with a online market for essential agricultural supplies, from fertilizers to pest control, everything you need to cultivate success.</p>
     <a href="/farmingmaterialsfacility"><button>View More Details</button>
</a>
     
             </div>
           </div>
     </div>
           
     </>
  )
}

export default Service
