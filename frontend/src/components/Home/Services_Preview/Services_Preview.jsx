import React from 'react'
import services from './data';
import style from './Services.module.css';
function Services_Preview() {
    return (
    <div className={style.container}>
      <h2 className={style.title}>Services</h2>

      <div className={style.grid}>
        {services.map((service, index) => (
          <div key={index} className={style.card}>
            <h3 className={style.name}>{service.title}</h3>
            <p className={style.desc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Services_Preview
