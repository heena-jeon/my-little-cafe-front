import { Routes, Route } from 'react-router-dom';
import {
  Page 
} from '../layouts';
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
      <Route path="/" element={<Page title="Home" /> } >
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="/payment" element={<Page title="Payment" /> } >
        <Route path="" element={<Payment /> } />
      </Route>
      <Route path="/coffee" element={<Page title="Coffee" /> } >
        <Route path="" element={<Coffee /> } />
      </Route>
      <Route path="/order" element={<Page title="Order" /> } >
        <Route path="" element={<Order />} />
      </Route>
      <Route path="/other" element={<Page title="Other" /> } >
        <Route path="" element={<Other /> } />
      </Route>
    </Routes>
  )
};

export default Router;