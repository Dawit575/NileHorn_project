import React from 'react';
import Data from './data.js';
import style from './Education.module.css';

function Education() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Education</h2>

      <div className={style.timeline}>
        {(Data || []).map((edu, index) => (
          <div key={index} className={style.item}>

            <div className={style.content}>
              <span className={style.year}>{edu.year}</span>
              <h3 className={style.school}>{edu.school}</h3>
              <h4 className={style.degree}>{edu.degree}</h4>
              <p className={style.desc}>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
