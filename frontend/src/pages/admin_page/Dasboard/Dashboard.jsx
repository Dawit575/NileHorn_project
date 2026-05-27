import React, { useState } from 'react';
import { useAuth } from '../../../contexts/Auth_context.jsx';
import { usePortfolio } from '../../../contexts/Portfolio_context.jsx';

import Project_cards from '../../../components/Admin/Dashboard/Admin_cards/Project_cards.jsx';
import AddPortfolio from '../add_portfolio/AddPortfolio.jsx';
import UpdatePortfolio from '../edit_portfolio/EditPortfolio.jsx';
import ViewPortfolio from '../view/ViewPortfolio.jsx';

import style from './Dashboard.module.css';

function Dashboard() {
  const { user } = useAuth();
  const { projects, deleteProject } = usePortfolio();

  const [search, setSearch] = useState('');

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [isViewOpen, setIsViewOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const safeProjects = Array.isArray(projects) ? projects : [];

  const filteredProjects = safeProjects.filter((p) =>
    p?.title?.toLowerCase().includes(search.toLowerCase())
  );

  const openViewModal = (project) => {
    if (!project) return;

    setSelectedProject(project);
    setIsViewOpen(true);
  };

  const openUpdateModal = (project) => {
    if (!project) return;

    setSelectedProject(project);
    setIsUpdateOpen(true);
  };

  const handleDelete = (id) => {
    if (!id) {
      alert('Invalid project ID');
      return;
    }

    const confirmDelete = window.confirm('Are you sure you want to delete this project?');

    if (confirmDelete) {
      deleteProject(id);
    }
  };

  return (
    <div className={style.Dashboard}>
      <h1 className={style.title}>Dashboard</h1>

      <h2 className={style.Dashboard_wellcome}>Welcome {user?.name || 'Admin'}</h2>

      <hr />

      <div className={style.top_actions}>
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={style.search}
        />

        <button className={style.add_btn} onClick={() => setIsAddOpen(true)}>
          + Add Project
        </button>
      </div>

      <hr />

      <div className={style.grid}>
        {filteredProjects.length === 0 ? (
          <p className={style.empty}>No projects found</p>
        ) : (
          filteredProjects.map((project) => (
            <Project_cards
              key={project.id}
              project={project}
              openViewModal={openViewModal}
              openUpdateModal={openUpdateModal}
              deleteProject={handleDelete}
            />
          ))
        )}
      </div>

      {isAddOpen && <AddPortfolio close={() => setIsAddOpen(false)} />}

      {isUpdateOpen && selectedProject && (
        <UpdatePortfolio project={selectedProject} close={() => setIsUpdateOpen(false)} />
      )}

      {isViewOpen && selectedProject && (
        <ViewPortfolio project={selectedProject} close={() => setIsViewOpen(false)} />
      )}
    </div>
  );
}

export default Dashboard;
