import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Payment,
  Coffee,
  Order,
  Other,
} from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route Path="/payment" element={<Payment />} />
      <Router path="/coffee" element={<Coffee />} />
      <Route path="/order" element={<Order />} />
      <Router path="/other" lement={<Other />} />
    </Routes>
  )
};

export default Router;