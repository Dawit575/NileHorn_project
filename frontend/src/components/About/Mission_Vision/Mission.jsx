import React from 'react'

import style from './Mission.module.css';
import mission from "../../../assets/icons/mission.png";
import vision from '../../../assets/icons/vision.png';

function Mission_vision() {
  return (
    <div className={style.container}>

      <h2 className={style.title}>Mission & Vision</h2>
        <hr />
      <div className={style.wrapper}>

        <div className={style.card}>
          <div className={style.icon}>
            <img src= {mission} alt="mission_icon" />
          </div>

          <h3 className={style.heading}>Mission</h3>

          <p className={style.text}>
            My mission is to build modern, scalable, and user-friendly
            web applications that solve real-world problems while
            continuously improving my technical and professional skills.
          </p>
        </div>

        <div className={style.card}>
          <div className={style.icon}>
            <img src= {vision} alt="vision_icon" />
          </div>

          <h3 className={style.heading}>Vision</h3>

          <p className={style.text}>
            My vision is to become a globally recognized full-stack
            software engineer contributing innovative digital solutions
            that positively impact people and businesses.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Mission_vision;
