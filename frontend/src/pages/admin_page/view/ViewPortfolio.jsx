import React from 'react';
import style from './View.module.css';

function ViewPortfolio({ project, close }) {
  if (!project) return null;

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2>{project.title || 'No Title'}</h2>

        {project.image &&
        <img
          src={project.image}
          alt={project.title}
          className={style.image} />}

        <p className={style.text}>{project.description || 'No description available'}</p>

        <div className={style.links}>
          {project.github_link && (
            <a href={project.github_link} target="_blank" rel="noreferrer" className={style.link}>
              GitHub
            </a>
          )}

          {project.live_link && (
            <a href={project.live_link} target="_blank" rel="noreferrer" className={style.link}>
              Live
            </a>
          )}
        </div>

        <button className={style.closeBtn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ViewPortfolio;
