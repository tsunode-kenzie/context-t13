import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const ProtectedRoutes = () => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return null;
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};

export default ProtectedRoutes;
