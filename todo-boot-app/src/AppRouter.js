import React from 'react'
import {Routes, Route} from 'react-router-dom';
import App from './App';
import Join from './components/Join';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
    </Routes>
  );
};

export default AppRouter