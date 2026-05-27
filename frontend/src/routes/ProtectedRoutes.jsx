import { useAuth } from '../contexts/Auth_context';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
