import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Order,
  Inventory,
} from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  )
};

export default Router;