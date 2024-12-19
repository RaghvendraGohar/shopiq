import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-left">
          <h2 className="footer-logo">E-Commerce</h2>
          <p className="footer-description">The best place to shop online for amazing products.</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
