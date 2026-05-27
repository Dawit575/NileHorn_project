import React, { useState } from 'react';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';
import style from './AddPortfolio.module.css';
import toast from 'react-hot-toast';

function AddPortfolio({ close }) {
  const { addProject } = usePortfolio();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    github_link: '',
    live_link: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cleanedData = {
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim(),
      github_link: formData.github_link.trim(),
      live_link: formData.live_link.trim(),
    };

    if (
      !cleanedData.title ||
      !cleanedData.description ||
      !cleanedData.image ||
      !cleanedData.github_link ||
      !cleanedData.live_link
    ) {
      alert('Please fill all fields properly');
      return;
    }

    try {
      await addProject(cleanedData);

      setFormData({
        title: '',
        description: '',
        image: '',
        github_link: '',
        live_link: '',
      });

      close();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <h2>Add Project</h2>

        <input
          name="title"
          placeholder="Title"
          className={style.input}
          value={formData.title}
          onChange={handleChange}
        />

        <input
          name="description"
          placeholder="Description"
          className={style.input}
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          className={style.input}
          value={formData.image}
          onChange={handleChange}
        />

        <input
          name="github_link"
          placeholder="GitHub"
          className={style.input}
          value={formData.github_link}
          onChange={handleChange}
        />

        <input
          name="live_link"
          placeholder="Live Link"
          className={style.input}
          value={formData.live_link}
          onChange={handleChange}
        />

        <div className={style.btnGroup}>
          <button className={style.saveBtn} onClick={handleSubmit}>
            Save
          </button>

          <button className={style.cancelBtn} onClick={close}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPortfolio;
