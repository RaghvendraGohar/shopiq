import React from 'react';
import '../styles/HeroSection.css';

const HeroSection: React.FC = () => (
  <section className="hero">
    <div className="hero-carousel">
      <img src="/images/banner1.avif" alt="Banner 1" />
      {/* <img src="/images/banner2.avif" alt="Banner 2" /> */}
    </div>
  </section>
);

export default HeroSection;
