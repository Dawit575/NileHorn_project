import React, { useState } from 'react';
import { useAuth } from '../../../contexts/Auth_context.jsx';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';
import style from './Dashboard.module.css';

function Dashboard() {
  const { user } = useAuth();
  const { addProject, updateProjects, deleteProject, projects } = usePortfolio();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProject, setEditProject] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github_link: '',
    live_link: '',
  });

  // ADD PROJECT
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProject(formData);

    setFormData({
      title: '',
      description: '',
      image: '',
      github_link: '',
      live_link: '',
    });
  };

  // EDIT PROJECT
  const openEditModal = (project) => {
    setEditProject(project);
    setIsModalOpen(true);
  };

  const handleEditChange = (e) => {
    setEditProject({
      ...editProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    await updateProjects(editProject._id, editProject);

    setIsModalOpen(false);
    setEditProject(null);
  };

  return (
    <div className={style.Dashboard}>
      <h1 className={style.title}>Dashboard</h1>
      <h2 className={style.Dashboard_wellcome}>Welcome {user?.name}</h2>

      <hr />

      {/* ADD FORM */}
      <h3 className={style.addProject}>Add Project</h3>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={formData.title}
          onChange={handleChange}
          className={style.title_input}
        />

        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
          className={style.desc_input}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className={style.image_input}
        />

        <input
          type="text"
          name="github_link"
          placeholder="GitHub Link"
          value={formData.github_link}
          onChange={handleChange}
          className={style.github_input}
        />

        <input
          type="text"
          name="live_link"
          placeholder="Live Link"
          value={formData.live_link}
          onChange={handleChange}
          className={style.live_input}
        />

        <button type="submit" className={style.add_btn}>
          Add Project
        </button>
      </form>

      <hr />

      {/* PROJECT LIST */}
      <h3 className={style.all_btn}>All Projects</h3>

      {projects.length === 0 ? (
        <p>No projects found</p>
      ) : (
        projects.map((project) => (
          <div key={project._id} className={style.map_container}>
            <h4 className={style.title_project}>{project.title}</h4>
            <p className={style.title_disc}>{project.description}</p>

            <a href={project.github_link} target="_blank">
              GitHub
            </a>
            <br />
            <a href={project.live_link} target="_blank">
              Live
            </a>

            <br />

            <button onClick={() => deleteProject(project._id)} className={style.delete_btn}>
              Delete
            </button>

            <button onClick={() => openEditModal(project)} className={style.update_btn}>
              Edit
            </button>
          </div>
        ))
      )}

      {/* MODAL (OUTSIDE MAP - CORRECT) */}
      {isModalOpen && editProject && (
        <div className={style.modalOverlay}>
          <div className={style.modal}>
            <h2>Edit Project</h2>

            <form onSubmit={handleUpdateSubmit}>
              <input name="title" value={editProject.title} onChange={handleEditChange} />
              <input
                name="description"
                value={editProject.description}
                onChange={handleEditChange}
              />
              <input name="image" value={editProject.image} onChange={handleEditChange} />
              <input
                name="github_link"
                value={editProject.github_link}
                onChange={handleEditChange}
              />
              <input name="live_link" value={editProject.live_link} onChange={handleEditChange} />

              <button type="submit">Save</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
