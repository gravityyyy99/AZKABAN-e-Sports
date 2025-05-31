import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="social-links">
        <a href="https://twitter.com/azkaban_esports" target="_blank" rel="noopener noreferrer">
          <img src="/X_logo-removebg-preview.png" alt="Twitter" />
          Twitter
        </a>
        <a href="https://instagram.com/azkaban_esports" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon_768467-672-removebg-preview.png" alt="Instagram" />
          Instagram
        </a>
        <a href="https://facebook.com/azkaban_esports" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-vector-social-media-icon_459124-520-removebg-preview.png" alt="Facebook" />
          Facebook
        </a>
        <a href="https://youtube.com/azkaban_esports" target="_blank" rel="noopener noreferrer">
          <img src="/social-06-512-removebg-preview.png" alt="YouTube" />
          YouTube
        </a>
        <a href="mailto:contact@azkabanesports.com">
          <img src="/set-social-media-business-icons_155083-584-removebg-preview.png" alt="Email" />
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;