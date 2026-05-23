import React from 'react';
import style from './Hero.module.css';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.overlay}></div>

      <div className={style.content}>
        <h1>
          Hi, I'm <span>Dawit</span>
        </h1>

        <h2>I create fast and modern websites that people enjoy using.</h2>

        <div className={style.buttons}>
          <Link to="/portfolio" className={style.primaryBtn}>
            See Portfolio
          </Link>
          <Link to="/service" className={style.secondaryBtn}>
            Service
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
