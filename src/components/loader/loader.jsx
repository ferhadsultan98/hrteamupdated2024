import React from 'react';
import './loader.css'; 

const Loader = () => (
  <div className="LoaderContainer">
    <div className="loading-wave">
      <div className="loading-bar" />
      <div className="loading-bar" />
      <div className="loading-bar" />
      <div className="loading-bar" />
    </div>
  </div>
);

export default Loader;
