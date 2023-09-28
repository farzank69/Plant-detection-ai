// ImageDetail.js
import React from 'react';
import Camera from '../Camera/Camera';
import "./PlantDetail.css";
const plantImage = "tulsi.jpg";
import { Component } from 'react';


class PlantDetails extends Component {
  constructor() {
    super();
    this.state = {
      plantData: {
        plantimage: 'tulsi.jpg',
        name: 'Name',
        scientificName: 'scientific name',
        geographicalInfo: 'country Name',
        diseasesCure: 'Diseases cures',
        description: 'Ocimum tenuiflorum, commonly known as holy basil...',
      },
    };
  }

  render() {
    const { plantimage, name, scientificName, geographicalInfo, diseasesCure, description } = this.state.plantData;

    return (
      <div className="image-detail">
        <div id="plant-image"><img src={plantimage} alt='image' />
            <p id='confi'>s</p>
         </div>
        <table>
          <tr>
            <td>Name:</td>
            <td className="plant-name">{name}</td>
          </tr>
          <tr>
            <td>Scientific Name:</td>
            <td className="scientific-name">
              <i>{scientificName}</i>
            </td>
          </tr>
          <tr>
            <td>Geographical:</td>
            <td className="plant-geo">{geographicalInfo}</td>
          </tr>
          <tr>
            <td>Diseases Cure:</td>
            <td className="plant-cure">{diseasesCure}</td>
          </tr>
        </table>
        <div className="image-full-description">
          <p>About</p>
          {description}
        </div>
      </div>
    );
  }
}

export default PlantDetails;
