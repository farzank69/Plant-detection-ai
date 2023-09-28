// ImageDetail.js
import React from 'react';
import Camera from '../Camera/Camera';
import "./PlantDetail.css";
const plantImage = "tulsi.jpg";

const PlantDetails = () => {
  return (
    <div className="image-detail"> 
        <div id='plant-image'> 
        </div>

         <table>
           
        <tr>
            <td>Name:</td>
            <td className='plant-name'>Tulsi</td>
        </tr>
        <tr>
            <td>Scientific Name:</td>
            <td className='scientific-name'><i>Ocimum tenuiflorum</i></td>
            
        </tr>
       
        <tr>
            <td>Geographical:</td>
            <td className='plant-geo'>India, Himalayas, America, Australia, China, Nepal, Malaysia</td> 
        </tr>

        <tr>
            <td>Diseases Cure:</td>
            <td className='plant-cure '>
            Kidney Stones, Fever, Asthama, Sore throat, Diabetes</td> 
                  </tr>
      </table>

            <div className='image-full-description'>
                <h1>About</h1>
                 Ocimum tenuiflorum, commonly known as holy basil, tulsi or tulasi, and tamole, damole, or domole in Fiji, is an aromatic perennial plant in the family Lamiaceae. It is native to tropical and subtropical regions of Australia, Malesia, Asia, and the western Pacific. It is widely cultivated throughout the Southeast Asian tropics. This plant has escaped from cultivation and has naturalized in many tropical regions of the Americas. It is an agricultural and environmental weed.<br/>

                Tulsi is cultivated for religious and traditional medicine purposes, and also for its essential oil. It is widely used as a herbal tea, commonly used in Ayurveda, and has a place within the Vaishnava tradition of Hinduism, in which devotees perform worship involving holy basil plants or leaves.
            </div>
         </div>



  );
};

export default PlantDetails;
