import React, {useState, useCallback} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

function App() {
  const [category, setCategory] = useState('all');

  const changeCategory = useCallback((category) => {
    setCategory(() => category);
  }, []);

  return (
    <>
      <Categories category={category} changeCategory={changeCategory}></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
}

export default App;
