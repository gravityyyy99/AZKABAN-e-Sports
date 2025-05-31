import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          Azkaban e-Sports is a premier esports organization dedicated to fostering talent, competing at the highest levels, and creating a global community of gamers. Our mission is to push the boundaries of competitive gaming and inspire the next generation of esports athletes.
        </p>
        <p>
          With a team of passionate players, coaches, and support staff, we strive for excellence in every tournament we participate in. Join us on our journey to dominate the esports world!
        </p>
        <Link to="/contact" className="contact-button">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;