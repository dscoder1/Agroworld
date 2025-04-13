import React from 'react'
import Adminnavbar from './Adminnavbar'
import CropImage from '../assets/CropImage.jpg'
const Admincropfacility = () => {
  return (
     <>
     <Adminnavbar/>
      <div className="abouthead">
           <p>Our Crop Service</p>
          </div>
          <div className="seedfacility">
                       <div className="leftseedfacility">
                       <img src={CropImage} alt="Crop Image" />
               
                       </div>
                       <div className="rightseedfacility">
               <p>
               At Agro World, our crop service is designed to facilitate a direct connection between farmers and consumers, allowing for the seamless buying and selling of crops for general use. We provide a user-friendly platform where farmers can showcase their harvested crops, complete with essential details such as product name, images, quantity, and seller information, including their name and contact number. This transparency ensures that consumers can make informed decisions while supporting local agriculture. Whether you’re a farmer looking to sell your fresh produce or a consumer in search of high-quality crops for your kitchen, our platform makes it easy to connect. With a focus on quality and community, we aim to promote sustainable practices and foster relationships between growers and buyers. Join us today to explore a diverse range of crops and experience the convenience of purchasing directly from the source!.Together, we can cultivate a thriving agricultural community that benefits everyone involved.
     
     
     
     
               </p>
                       </div>
                                    
                                 </div>
                                 <div className="seedfacilitybtn">
                 <a href="/admincropdata"><button >Crop Details</button></a>
             </div>
     </>
  )
}

export default Admincropfacility
