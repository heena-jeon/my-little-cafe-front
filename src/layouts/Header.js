import {
  Box,
} from '@mui/material';
import {
  ArrowBackIosNew,
  Menu,
} from '@mui/icons-material';

const Header = () => {
  return (
    <Box style={{"display":"flex"}}>
      <Box>
        <ArrowBackIosNew />
      </Box>
      <Box style={{"width":"200px"}}>
        <h3>주문하기</h3>
      </Box>
      <Box>
        <Menu />
      </Box>
    </Box>
  )
};

export default Header;