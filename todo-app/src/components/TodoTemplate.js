import React from 'react'
import '../scss/TodoTemplate.scss';

const TodoTemplate = ({children}) => {
  return (
    <div className='TodoTemplate'>
        <div className='app-title'>일정관리</div>
        <div className='content'>{children}</div>
        {/* <div>
                <p>일정 리스트</p>
            </div> 
            이 내용이 children에 들어가서 그대로 표출됩니다.*/}
    </div>
  );
};

export default TodoTemplate