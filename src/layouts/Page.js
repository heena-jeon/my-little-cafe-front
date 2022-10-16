import Header from './Header';
import { Outlet } from 'react-router-dom';

const Page = (props) => {
  const {
    title,
  } = props;

  return (
    <>
      <Header title={title} />
      <Outlet />
    </>
  )
};

export default Page;