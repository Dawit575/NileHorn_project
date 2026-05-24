import React from 'react';
import style from './Hero.module.css';
import { Link } from 'react-router-dom';
import hero_image from "../../../assets/images/edited.png";

function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.overlay}></div>

      <div className={style.hero_content}>
        <div className={style.left_content}>

          <div className={style.left_text}>
            <h1>
              Hi, I'm <span>Dawit</span>
            </h1>
            <h2>I build fast, modern web experiences people actually enjoy using</h2>
          </div>

          <div className={style.left_buttons}>
            <Link to="/portfolio" className={style.primaryBtn}>
              See Portfolio
            </Link>
            <Link to="/service" className={style.secondaryBtn}>
              Service
            </Link>
          </div>
        </div>

        <div className={style.right_content}>
          <img src={hero_image} alt="Hero Banner" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
