import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';
import PlantDetails from './components/PlantDetails/PlantDetails';
import Navbar from './components/NavBar/NavBar';



class App extends Component {
  constructor() {  
    super();
    this.state = {
      imageUrl: '',
    };
  }


  onInputChange = (event) => {
    this.setState({ imageUrl: event.target.value });
  }

  onImageSubmit = () => {
    // fetch('http://localhost:3000/detect', {
    //     method: 'post',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       input: this.state.input
    //     })
    //   })
    //   .then(response => response.json())
    //   .then(response => {
    //     console.log(response)
    //   })
    //   .catch(err => console.log(err));
    console.log("Image Done")
    
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
      fetch('http://localhost:3000/detect', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err));


  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <div>
          <Navbar />
          <ImageLinkForm/>
          <PlantDetails/>
        </div>
      </div>
    );
  }
}

export default App;
