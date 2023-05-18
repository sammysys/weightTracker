import React from 'react'

import './home.css'
import Fitness from '../../assets/Fitness.png'
const Home = () => {
  return (
    
    <div className="container">
      <div className="left-section">
        <h1 className="headline">Your Fitness Journey Starts Here</h1>

          <button  className='btn'><a href="/#calorie" className="navbar-link">track your weight</a></button>
        
          

      </div>
      <div className="right-section">
        <img src={Fitness} alt="Fitness" className="fitness-model-img" />
      </div>
    </div>
    
  );
};


export default Home;