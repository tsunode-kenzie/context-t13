import { Route, Routes } from 'react-router-dom';
import Dashboard from '../page/Dashboard';
import Home from '../page/Home';

const RoutesMain = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;
