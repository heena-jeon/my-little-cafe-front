import { useState } from 'react';
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
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Pay" icon={<Payment />} />
      <BottomNavigationAction label="Coffee" icon={<Coffee />} />
      <BottomNavigationAction label="Order" icon={<ShoppingCart />} />
      <BottomNavigationAction label="Other" icon={<MoreHoriz />} />
    </BottomNavigation>
  )
}

export default NavBar;