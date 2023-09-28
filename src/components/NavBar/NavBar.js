import React from 'react';
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
    <div className="left">
      <h1 className='title'>Plant Detection</h1>
    </div>
    <div className="right">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Plant</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Login/Logout</a></li>
      </ul>
    </div>
  </div>
  );
};



export default Navbar;
