import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';
import Join from './components/Join';
import Login from './components/Login';
import BoardList from './components/BoardList';
import InsertBoard from './components/InsertBoard';
import Board from './components/Board';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/join' element={<Join></Join>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/board-list' element={<BoardList></BoardList>}></Route>
        <Route path='/insert-board' element={<InsertBoard></InsertBoard>}></Route>
        <Route path='/board/:boardNo' element={<Board></Board>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
