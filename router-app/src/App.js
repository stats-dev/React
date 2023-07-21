//라우팅 기능을 구현하기 위한 Routes, Route 임포트
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Introduce from './components/Introduce';
// import Kang from './components/profile/Kang';
// import Go from './components/profile/Go';
import Profile from './components/Profile';
import Articles from './components/Articles';
import Article from './components/Article';
import Layout from './components/Layout';
import Login from './components/Login';
import Mypage from './components/Mypage';
import NotFound from './components/NotFound';

function App() {
  return (
    // 라우팅 기능을 구현하기 위해 최상위 컴포넌트로 Routes를 지정
    <Routes>
      {/* Route 컴포넌트로 페이지별 url 매핑
          url은 path 속성을 이용해서 지정
          렌더링할 컴포넌트는 element 속성으로 지정
          url 파라미터는 콜론(:)키로 지정
      */}
      <Route path='/' element={<Layout></Layout>}>
        {/* Route 컴포넌트에는 index라는 props가 있는데 path="/"랑 동일한 의미를 갖는다. */}
        <Route index element={<Home></Home>}></Route>
        <Route path='/introduce' element={<Introduce></Introduce>}></Route>
        {/* <Route path='/profile/kang' element={<Kang></Kang>}></Route>
        <Route path='/profile/go' element={<Go></Go>}></Route> */}
        <Route path='/profile/:firstName' element={<Profile></Profile>}></Route>
        {/* <Route path='/articles' element={<Articles></Articles>}></Route>
        <Route path='/articles/:id' element={<Article></Article>}></Route> */}
        {/* 중첩 Route를 이용해서 한 페이지에 여러개의 컴포넌트 출력 */}
        <Route path='/articles' element={<Articles></Articles>}>
          <Route path=':id' element={<Article></Article>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/mypage' element={<Mypage></Mypage>}></Route>
      </Route>

        {/* 위에 지정된 url이 아닌 요청이 왔을 때의 처리. 별표시를 사용한다.*/}
        <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>      
  );
}

export default App;
