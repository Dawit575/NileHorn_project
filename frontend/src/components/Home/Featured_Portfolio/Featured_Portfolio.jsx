import React, { useEffect } from 'react';
import style from './Featured.module.css';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';

function Featured_portfolio() {
  const { projects, fetchProjects, loading } = usePortfolio();

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className={style.container}>
      <h2 className={style.title}>Featured Projects</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={style.grid}>
          {projects.slice(0,6).map((project) => (
            <div key={project.id} className={style.card}>
              {project.image && (
                <img src={`${project.image}`}
                  alt={project.title}
                  className={style.image}
                />
              )}

              <h3 className={style.name}>{project.title}</h3>

              <p className={style.desc}>{project.description?.slice(0, 80)}...</p>

              <div className={style.links}>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  GitHub
                </a>

                <a href={project.live_link} target="_blank" rel="noreferrer">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Featured_portfolio;
