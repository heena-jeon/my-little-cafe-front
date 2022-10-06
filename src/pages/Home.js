import {
  Box,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickEvent = (toUrl) => {
    navigate(toUrl);
  };

  return (
    <Box>
      <Button 
        variant='contained'
        onClick={() => {
          handleClickEvent('/inventory');
        }}
      >
        재고 관리
      </Button>
      <Button 
        variant='contained'
        onClick={() => {
          handleClickEvent('/order');
        }}
      >
        주문 하기
      </Button>
    </Box>
  );
};

export default Home;