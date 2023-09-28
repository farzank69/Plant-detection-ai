// ImageDetail.js
import React from 'react';
import Camera from '../Camera/Camera';

import "./PlantDetail.css";

const PlantDetails = () => {
  return (
    <div className="image-detail"> 
         <img  className="p" src={''} alt="image" width="100px" height="100px" />

         <table>
        <tr>
            <td>Name:</td>
            <td className='plant-name'>Tulsi</td>
        </tr>
        <tr>
            <td>Scientific Name:</td>
            <td className='scientific-name'><i>Holy Basil</i></td>
            
        </tr>
        <tr>
            <td>Description:</td>
            <td className='plant-description'>Tulsi is found in India in every where</td>   
        </tr>
        <tr>
            <td>Geographical:</td>
            <td className='plant-geo'>India, Himalayas</td> 
        </tr>
        <tr>
            <td>Description:</td>
            <td className='plant-des'>Tulsi is found in India in every where</td>   
        </tr>

        <tr>
            <td>Diseases Cure:</td>
            <td className='plant-cure '>Cold, Fever o make an animated collapsible, add max-height: 0, overflow: hidden and a transition for the max-height property, to the panel class.

Then, use JavaScript to slide down the content by setting a calculated max-height, depending on the panel's height on different screen sizes:</td> 
        </tr>

      </table>
         </div>

  );
};

export default PlantDetails;
