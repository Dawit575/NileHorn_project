import React from 'react';
import style from './Service.module.css';

function Service_Grid({ services }) {
  return (
    <div className={style.container}>
      {services.length === 0 ? (
        <p className={style.empty}>No services available</p>
      ) : (
        <div className={style.grid}>
          {services.map((service, index) => (
            <div key={index} className={style.card}>
              <div className={style.icon}>{service.icon || '⚡'}</div>

              <h3 className={style.title}>{service.title}</h3>

              <p className={style.desc}>{service.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Service_Grid;
