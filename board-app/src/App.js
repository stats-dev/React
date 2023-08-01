import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route path='/' element={<Home></Home>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
