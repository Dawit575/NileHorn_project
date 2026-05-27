import React, { useEffect, useState } from 'react';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';
import style from './EditPortfolio.module.css';

function EditPortfolio({ project, close }) {
  const { updateProjects } = usePortfolio();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github_link: '',
    live_link: '',
  });

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        image: project.image || '',
        github_link: project.github_link || '',
        live_link: project.live_link || '',
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProjects(project.id, formData);
      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2>Update Project</h2>

        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className={style.input}
        />

        <input
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className={style.input}
        />

        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className={style.input}
        />

        <input
          name="github_link"
          value={formData.github_link}
          onChange={handleChange}
          placeholder="GitHub Link"
          className={style.input}
        />

        <input
          name="live_link"
          value={formData.live_link}
          onChange={handleChange}
          placeholder="Live Link"
          className={style.input}
        />

        <div className={style.btnGroup}>
          <button className={style.saveBtn} onClick={handleSubmit}>
            Update
          </button>

          <button className={style.cancelBtn} onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditPortfolio;
