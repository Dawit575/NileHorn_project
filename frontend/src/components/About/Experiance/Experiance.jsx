import React from 'react';
import style from './Experiance.module.css';
import Expriance from './data.js';

function Experiance() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Experience</h2>
        <hr />
      <div className={style.wrapper}>
        {(Expriance || []).map((exp, index) => (
          <div key={index} className={style.card}>
            <div className={style.left}>
              <span className={style.year}>{exp.year}</span>
              <h3 className={style.company}>{exp.company}</h3>
              <h4 className={style.role}>{exp.role}</h4>
            </div>

            <div className={style.line}></div>

            <div className={style.right}>
              <ul>
                {(exp.highlights || []).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiance;
