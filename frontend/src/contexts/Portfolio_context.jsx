import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api.js';
import { useAuth } from './Auth_context.jsx';

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [singleproject,setSingleProjects] = useState(null);
  const [loading, setLoading] = useState(false);

  const { token } = useAuth();

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await api.get('/portfolio-routes/getAllPortfolio');

      setProjects(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSinglePortfolio = async (id) => {
      try {
        setLoading(true);

        const result = await api.get(`/portfolio-routes/getById/${id}`);
        setSingleProjects(result.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
  }

  const addProject = async (projectData) => {
    try {
      await api.post('/portfolio-routes/createPortfolio', projectData, {
      headers: {
        Authorization: `Bearer ${token}`,
    },
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };
  const updateProjects = async(id,updateData) => {
    try {
      await api.put(`/portfolio-routes/editPortfolio/${id}`, updateData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProjects();
    } catch (error) {
      console.log(error)
    }
  }
  const deleteProject = async (id) => {
    try {
      await api.delete(`/portfolio-routes/deletePortfolio/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProjects();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        loading,
        fetchProjects,
        fetchSinglePortfolio,
        addProject,
        updateProjects,
        deleteProject,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  return useContext(PortfolioContext);
};
