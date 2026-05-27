import React from 'react';
import style from './Admin_cards.module.css';

function Project_cards({ project, openViewModal, openUpdateModal, deleteProject }) {
  return (
    <div className={style.project_card}>
      {project.image && <img src={project.image} alt={project.title} className={style.image} />}

      <h1 className={style.title}>{project.title}</h1>

      <p className={style.disc}>{project.description}</p>

      <div className={style.actions}>
        <button className={style.view_btn} onClick={() => openViewModal(project)}>
          View
        </button>

        <button className={style.update_btn} onClick={() => openUpdateModal(project)}>
          Update
        </button>

        <button
          className={style.delete_btn}
          onClick={() => deleteProject(project.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Project_cards;
