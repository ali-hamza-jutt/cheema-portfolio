import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ReactTyped from 'react-typed';

function App() {
  const names = ['Abdullah Ahmad', 'a Software Engineer', 'a Flutter Developer'];

  return (
    <div className="hero">
      <Navbar />
      <div className='hero-container'>
        <div className='typed-intro'>
          <h1 className='intro-heading'>
            I'm {" "}
            <ReactTyped strings={names} typeSpeed={100} backSpeed={100} loop />
          </h1>
        </div>
          <div className='dev-img-container'>
            {/* <img src='./me.jpg' alt='Cheema'></img> */}
            <div className='dev-img'></div>
          </div>
        </div>
    </div>
  );
}

export default App;
