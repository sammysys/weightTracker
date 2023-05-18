import React, { useState } from 'react';
import './calorie.css'
const CalorieCalculator = () => {
  const [calories, setCalories] = useState(0);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(1.2); // Default activity level (sedentary)

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleActivityLevelChange = (e) => {
    setActivityLevel(e.target.value);
  };

  const calculateCalories = () => {
    const calculatedCalories = (10 * weight) + (6.25 * height) - 5;
    setCalories(calculatedCalories);
  };

  return (
    <div id="calorie">
      <h2>Calorie Calculator</h2>
      <div className='ca'>
        <label>Weight (in kg): </label>
        <input type="number" value={weight} onChange={handleWeightChange} />
      </div>
      <div className='ca'>
      <label>Height (in cm): </label>
        <input type="number" value={height} onChange={handleHeightChange} />
      </div>
      <div className='ca'>
        <label>Activity Level: </label>
        <select value={activityLevel} onChange={handleActivityLevelChange}>
          <option value={1.2}>Sedentary (little or no exercise)</option>
          <option value={1.375}>Lightly active (light exercise/sports 1-3 days/week)</option>
          <option value={1.55}>Moderately active (moderate exercise/sports 3-5 days/week)</option>
          <option value={1.725}>Very active (hard exercise/sports 6-7 days a week)</option>
          <option value={1.9}>Extra active (very hard exercise/sports & physical job)</option>
        </select>
      </div>
      <button onClick={calculateCalories}>Calculate</button>
      <p>Calories: {calories}</p>
    </div>
  );
};

export default CalorieCalculator;
