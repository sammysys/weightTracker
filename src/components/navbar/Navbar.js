import React, { useState } from 'react';
import './navbar.css';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/home" className="navbar-logo">Repeat</a>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-items">
            {/* s */}
            <li className="navbar-item">
              <a href="/#about" className="navbar-link">About</a>
            </li>
            <li className="navbar-item">
              <a href="/#services" className="navbar-link">Services</a>
            </li>
            <li className="navbar-item">
              <a href="/#contact-page" className="navbar-link">Contact</a>
            </li>
          </ul>
        </div>

        <div className={`hamburger-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
