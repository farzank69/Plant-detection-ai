import React from 'react';

const PlantRecognition = ({ imageUrl }) => {
  // Add the code for plant recognition here

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <h2>Plant Name</h2>
        <p>Common Names</p>
        <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto'/>
      </div>
    </div>
  );
}

export default PlantRecognition;
