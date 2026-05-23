import React from 'react';
import style from './Hero.module.css';

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.overlay}></div>

      <div className={style.content}>
        <h1>
          Hi, I'm <span>Dawit</span>
        </h1>

        <p>
          Full Stack Developer who builds fast, modern, and responsive web applications. I
          specialize in JavaScript, React, Node.js, and problem solving with Data Structure and Algorithms.
        </p>
        <div className={style.buttons}>
          <button className={style.primaryBtn}>Get Started</button>
          <button className={style.secondaryBtn}>Watch Videos</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
