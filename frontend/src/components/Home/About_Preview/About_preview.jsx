
import React from 'react';
import styles from './About_preview.module.css';
import my_photo from "../../../assets/images/AI.png"
const About_preview = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <div className={styles.imageBox}>
            <img src= {my_photo} alt="About" className={styles.image} />
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.subtitle}>ABOUT ME</p>

          <h2 className={styles.title}>Passionate Full Stack Developer</h2>

          <p className={styles.description}>
            I am a creative and detail-oriented web developer passionate about building responsive,
            modern, and user-friendly web applications. I enjoy transforming ideas into real-world
            digital solutions using modern technologies.
          </p>

          <p className={styles.description}>
            I specialize in React, JavaScript, Node.js, Express, and MySQL. My goal is to create
            clean UI designs and scalable backend systems that provide excellent user experiences.
          </p>

          <div className={styles.infoContainer}>
            <div className={styles.card}>
              <h3>1+</h3>
              <span>Years Experience</span>
            </div>

            <div className={styles.card}>
              <h3>10+</h3>
              <span>Projects Completed</span>
            </div>

            <div className={styles.card}>
              <h3>5+</h3>
              <span>Technologies</span>
            </div>
          </div>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default About_preview;
