import React, {useState, useCallback} from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import {Routes, Route} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {

  return (
    <Routes>
      <Route path='/' element={<NewsPage></NewsPage>}></Route>
      <Route path='/:category' element={<NewsPage></NewsPage>}></Route> 
    </Routes>
  );
}

export default App;
