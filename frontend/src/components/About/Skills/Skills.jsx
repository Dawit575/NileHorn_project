import React from 'react'
import style from "./Skill.module.css";
import Skill from "./data.js"
function Skills() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Skills</h2>
        <hr />
      <div className={style.grid}>
        {Skill.map((skill, index) => (
          <div key={index} className={style.card}>
            <div className={style.top}>
              <h3>{skill.name}</h3>
              <span>{skill.level}</span>
            </div>

            <div className={style.progressBar}>
              <div className={style.progress} style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
