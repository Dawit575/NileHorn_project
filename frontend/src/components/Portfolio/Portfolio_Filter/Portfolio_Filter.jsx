import React from 'react';
import style from './Portfolio_Filter.module.css';

function Portfolio_filter({ filters, activeFilter, setActiveFilter, search, setSearch }) {
  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Search project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={style.search}
      />

      <div className={style.buttons}>
        {filters.map((item) => (
          <button
            key={item}
            className={`${style.btn} ${activeFilter === item ? style.active : ''}`}
            onClick={() => setActiveFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Portfolio_filter;
