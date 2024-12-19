import React from 'react';
import Link from 'next/link'; // Import Link from next/link
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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/categories">Categories</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
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
