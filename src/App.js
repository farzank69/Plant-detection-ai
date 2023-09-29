import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import PlantDetails from './components/PlantDetails/PlantDetails';

import axios from 'axios';
class App extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: '',
      image_name: "",
    };
  }

  onInputChange = (event) => {
    this.setState({ imageUrl: event.target.value });
    console.log(this.imageUrl)
  }

  

  onButtonSubmit = () => {
    // this.setState({imageUrl: this.state.input});
    
  //     fetch('http://localhost:3000/detect')
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(err => console.log(err));
  // }

  // Define the data object
  const data = {
    imageUrl: 'https://example.com/image.jpg', // Replace with your image URL
  };
  
  // Make a POST request to the server
  axios.post('http://192.168.1.26:3000/detect', data)
    .then((response) => {
      // Handle the response here
      if (response.status === 200) {
        console.log(response.data);
        
        // You can update state or perform other actions with the response data here
      } else {
        console.error('Request failed with status code:', response.status);
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('An error occurred while making the request:', error);
    });
  

  }
  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <div>
          <Navbar/>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
          <PlantDetails/>
        </div>
    
      </div>
    );
  }
}

export default App;
