import { useEffect, useState } from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import {
  Home,
  ShoppingCart,
  Payment,
  Coffee,
  MoreHoriz,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <BottomNavigation
      value={currentPage}
      onChange={(event, newValue) => {
        setCurrentPage(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction 
        label="Home"
        value="/"
        icon={<Home />}
        LinkComponent={Link}
        to={'/'}
      />
      <BottomNavigationAction 
        label="Pay"
        value="payment"
        icon={<Payment />}
        LinkComponent={Link}
        to={'/payment'}
      />
      <BottomNavigationAction
        label="Coffee"
        value="coffee"
        icon={<Coffee />}
        LinkComponent={Link}
        to={'/coffee'}
      />
      <BottomNavigationAction
        label="Order"
        value="order"
        icon={<ShoppingCart />}
        LinkComponent={Link}
        to={'/order'}
      />
      <BottomNavigationAction
        label="Other"
        value="other"
        icon={<MoreHoriz />}
        LinkComponent={Link}
        to={'/other'}
      />
    </BottomNavigation>
  )
}

export default NavBar;