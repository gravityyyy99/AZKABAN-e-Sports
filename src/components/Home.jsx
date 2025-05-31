import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="background-overlay"></div>
      <div className="home-content">
        <img src="/azkaban-logo.png" alt="Azkaban e-Sports Logo" className="logo" />
        <h1 className="welcome-text">Welcome to Azkaban e-Sports</h1>
        <Link to="/about" className="learn-more-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Home;