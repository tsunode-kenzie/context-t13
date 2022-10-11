import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Dashboard from '../page/Dashboard';
import Profile from '../page/Profile';
import Home from '../page/Home';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />

    <Route element={<ProtectedRoutes />}>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
    </Route>
  </Routes>
);

export default RoutesMain;
