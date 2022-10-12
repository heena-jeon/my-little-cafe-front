import {
  Box,
} from '@mui/material';
import NavBar from '../layouts/NavBar';
import Header from '../layouts/Header';
import ViewMode from '../layouts/ViewMode';

const Order = () => {
  return (
    <Box>
      <Header />
      <ViewMode />
      <h3>주문하기</h3>
      <table>
        <thead>
          <td>
            <input type="checkbox" />
          </td>
          <td>번호</td>
          <hd>내용</hd>
          <td>갯수</td>
        </thead>
        <tbody>
          <td>
            <input type="checkbox" />
          </td>
          <td>1</td>
          <td>커피</td>
          <td>1</td>
        </tbody>
      </table>
      <NavBar />
    </Box>
  );
};

export default Order;