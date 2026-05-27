import React from 'react'
import styles from './Skill_Preview.module.css';
import skills from "./data.js"
function Skill_preview() {
    return (
      <section className={styles.container} id="skills">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.subtitle}>SKILLS</p>
            <h2 className={styles.title}>Technologies I Work With</h2>
            <p className={styles.description}>A quick overview of my core development stack.</p>
          </div>

          <div className={styles.skills}>
            {skills.map((skill, index) => (
              <div className={styles.badge} key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default Skill_preview
