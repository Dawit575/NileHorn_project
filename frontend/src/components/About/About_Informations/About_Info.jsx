import React from 'react';
import style from './About.module.css';
import Hero from "../../../assets/images/Hero.png"
function About_info() {
  return (
    <div className={style.container}>
      <h1 className= {style.about}>About Me</h1>
      <div className={style.profileSection}>
        <img src= {Hero} alt="Profile" className={style.image} />
      </div>

      <div className={style.infoSection}>
        <h1 className={style.name}>Dawit Tadesse Alemu</h1>

        <h3 className={style.title}>MERN Stack Developer</h3>

        <p className={style.bio}>
          I am a passionate software developer who enjoys building modern, responsive, and scalable
          web applications using React, Node.js, and MySQL. I love solving real-world problems with
          clean and efficient code.
        </p>

        <p className={style.location}>📍 Amhara, Ethiopia</p>
      </div>
    </div>
  );
}

export default About_info;
