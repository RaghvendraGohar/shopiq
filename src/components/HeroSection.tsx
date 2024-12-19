import React from 'react';
import Image from 'next/image';

import '../styles/HeroSection.css';

const HeroSection: React.FC = () => (
  <section className="hero">
    <div className="hero-carousel">
      <Image src="/images/banner1.avif" alt="Banner 1" />
      {/* <img src="/images/banner2.avif" alt="Banner 2" /> */}
    </div>
  </section>
);

export default HeroSection;
