import CoffeeCard from './CoffeeCard';
import coffeeList from '../../data/coffee.json';

const CoffeeCardList = () => {
  
  const handleOnClick = () => {
    alert("click!!!")
  };

  return (
    <>
      {coffeeList.list.map((coffee, index) => {
        return (
          <CoffeeCard
            key={index}
            name={coffee.name}
            url={coffee.url}
            description={coffee.description}
            onClick={handleOnClick}
          />
        )
      })}
    </>
  );
};

export default CoffeeCardList;