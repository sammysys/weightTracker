import React from 'react';
import './services.css';
import salmon from '../../assets/salmon.jpg';
const Services = () => {
  return (
    <div id='services' className="services-page">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        <div className="service">
          <img src={salmon} alt="Service 1" />
          <h3>Service 1</h3>
          <p>Description of Service 1</p>
        </div>
        <div className="service">
          <img src={salmon} alt="Service 2" />
          <h3>Service 2</h3>
          <p>Description of Service 2</p>
        </div>
        <div className="service">
          <img src={salmon} alt="Service 3" />
          <h3>Service 3</h3>
          <p>Description of Service 3</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
