import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user ? (
        <>
          <Link to='/'>Home</Link>

          <h1>Dashboard</h1>
        </>
      ) : (
        <Navigate to='/' replace />
      )}
    </>
  );
};

export default Dashboard;
