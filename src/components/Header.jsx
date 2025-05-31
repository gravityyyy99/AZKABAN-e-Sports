import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo-link">
          <img src="/azkaban-logo.png" alt="Azkaban e-Sports Logo" className="logo-1" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/roster">Roster</Link>
          <Link to="/merch">Merch</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;