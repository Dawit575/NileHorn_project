import React, { useState } from 'react';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';
import Portfolio_filter from '../../../components/Portfolio/Portfolio_Filter/Portfolio_Filter.jsx';
import Portfolio_grid from '../../../components/Portfolio/Portfolio_Grid/Portfolio_Grid.jsx';
import style from './portfolio.module.css';

function Portfolio() {
  const { projects } = usePortfolio();
  const [search, setSearch] = useState('');

  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', ...new Set(projects?.map((p) => p.category).filter(Boolean))];

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <div className={style.container}>
      <h1 className={style.title}>My Portfolio</h1>
      <p className={style.subtitle}>All my projects from backend to frontend</p>

      <div className={style.filterSection}>
        <Portfolio_filter
          filters={filters}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          setSearch={setSearch}
        />
      </div>

      <div className={style.gridWrapper}>
        <Portfolio_grid projects={filteredProjects} />
      </div>
    </div>
  );
}

export default Portfolio;
