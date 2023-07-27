import React from 'react'
import {Routes, Route} from 'react-router-dom';
import App from './App';

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<App></App>}></Route>
    </Routes>
  );
};

export default AppRouter