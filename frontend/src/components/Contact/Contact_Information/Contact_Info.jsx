import React from 'react';
import style from './Contact_info.module.css';

function Contact_info() {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Contact Information</h2>

      <div className={style.card}>
        <div className={style.item}>
          <span className={style.label}>📧 Email</span>
          <p className={style.value}>dawittadesse56@example.com</p>
        </div>

        <div className={style.item}>
          <span className={style.label}>📱 Phone</span>
          <p className={style.value}>+251 963 860 446</p>
        </div>

        <div className={style.item}>
          <span className={style.label}>📍 Location</span>
          <p className={style.value}>Amhara, Ethiopia</p>
        </div>

        <div className={style.item}>
          <span className={style.label}>🕒 Availability</span>
          <p className={style.value}>Mon - Fri (8:00 AM - 6:00 PM)</p>
        </div>

        <div className={style.item}>
          <span className={style.label}>💼 Freelance</span>
          <p className={style.value}>Available for projects</p>
        </div>
      </div>
    </div>
  );
}

export default Contact_info;
