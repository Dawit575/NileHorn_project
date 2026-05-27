import React from 'react'
import Hero from '../../../components/Commen/Hero/Hero';
import Service_Grid from '../../../components/Services/Services_Grid/Services_Grid';
import services from './data';
import style from "./Services.module.css";
function Service() {
  return (
    <div className={style.container}>
      <Hero />
      <div className={style.hero}>
        <h1>What I Offer</h1>
        <p>I provide modern web development solutions for your business</p>
      </div>

      <Service_Grid services={services} />

      <div className={style.why}>
        <h2>Why Choose Me</h2>

        <div className={style.features}>
          <div>⚡ Fast Delivery</div>
          <div>🧹 Clean Code</div>
          <div>📱 Responsive Design</div>
          <div>🔗 Backend Integration</div>
        </div>
      </div>
    </div>
  );
}

export default Service
