import React from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => (
  <nav className="navbar">
    <div className="logo">FuturistShop</div>
    <ul className="menu">
      <li>Home</li>
      <li>Categories</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

export default Navbar;
