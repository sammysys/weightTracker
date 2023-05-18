/* eslint-disable react/jsx-no-undef */
import React from 'react'

import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Services from './pages/services/Services'
import ContactPage from './pages/contact/ContactPage'
import Footer from './components/footer/Footer'
import CalorieCalculator from './pages/calories/CalorieCalculator'
const App = () => {
  return (
    <div>
      
      

      <Navbar />
      
      
      <Home />
      <About />
      <Services />
      <CalorieCalculator />
      <ContactPage />
      <Footer /> 
      
      
    

    </div>
  )
}

export default App