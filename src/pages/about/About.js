import React from 'react'
import './about.css'
const About = () => {
  return (
    <div id='about'>
      <h1>About Us</h1>
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <p className="about-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a tristique justo, ac luctus ex. Maecenas id velit nec mauris interdum consequat. Sed nec vestibulum odio. Pellentesque sollicitudin elementum eros, non aliquet sapien feugiat et.</p>
          </div>
          <div className="grid-item">
            <p className="about-paragraph">Curabitur at quam id ex eleifend laoreet. Vivamus vehicula magna in dui faucibus, in faucibus eros rutrum. Nulla non felis auctor, fringilla nisl vitae, consequat quam. Donec id mauris at ligula blandit fermentum ut ut urna.</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About