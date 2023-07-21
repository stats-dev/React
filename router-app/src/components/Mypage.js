import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Mypage = () => {
    

    const isLogin = false;
    const navi = useNavigate();


    // useEffect(() => {
    //     if(!isLogin) {
    //         // return <Navigate to="/login"></Navigate>
    //         return navi('/login');
    //     }
    //   }, []);
 
    // //이렇게 작성하면 안됩니다.
    // if(!isLogin) {
    //     navi('/login');
    // }

    // 동기를 맞추는 useEffect를 사용해주면 됩니다.
    useEffect(() => {
        if(!isLogin) {
            navi('/login');
        }
    }, []);


  return (
    <div>Mypage</div>
  )
}

export default Mypage