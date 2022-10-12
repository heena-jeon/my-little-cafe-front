import Header from './Header';

const Container = (title, children) => {
  return (
    <>
      <Header title={title}/>
      {children}
    </>
  )
};

export default Container;