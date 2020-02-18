import React from 'react';
import './App.css';
import './Video.css';
import sample from './video.mp4'

function Video() {
  return (    
      <div class="section">

      <h1>Welcome to Aligebra</h1>

      <div className="video-container">
          <div className="color-overlay"></div>
          <video autoPlay loop muted>
              <source src={sample} type="video/mp4"/>
          </video>
      </div>
     
    </div>
  );
}

export default Video;
