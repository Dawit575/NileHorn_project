import React from 'react';
import style from './Portfolio_Grid.module.css';

function Portfolio_Grid({ projects }) {
  return (
    <div className={style.container}>
      {projects.length === 0 ? (
        <p className={style.empty}>No projects found</p>
      ) : (
        <div className={style.grid}>
          {projects.map((project) => (
            <div key={project.id} className={style.card}>

              {project.image && (
                <img
                  src={
                    project.image?.startsWith('http')
                      ? project.image
                      : `http://localhost:3000/uploads/${project.image}`
                  }
                  alt={project.title}
                  className={style.image}
                />
              )}

              <h3 className={style.title}>{project.title}</h3>

              <p className={style.desc}>{project.description?.slice(0, 90)}...</p>

              <span className={style.category}>{project.category}</span>

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

export default Portfolio_Grid;
