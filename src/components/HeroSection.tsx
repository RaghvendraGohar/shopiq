import React from 'react';
import Image from 'next/image';

import '../styles/HeroSection.css';

const HeroSection: React.FC = () => (
  <section className="hero">
    <div className="hero-carousel">
      <Image src="/images/banner2.avif" alt="Banner 1" layout="fill"/>
      {/* <img src="/images/banner2.avif" alt="Banner 2" /> */}
    </div>
  </section>
);

export default HeroSection;
