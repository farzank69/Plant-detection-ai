import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

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

  onButtonSubmit = () => {
    // You can use this.state.imageUrl to do something with the URL
    // For now, I'm just logging it
    console.log(this.state.imageUrl);
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <div>
          <ImageLinkForm
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit}
          />
        </div>
      </div>
    );
  }
}

export default App;
