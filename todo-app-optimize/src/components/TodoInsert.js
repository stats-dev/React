import React, { useState, useCallback } from 'react';
//+ 아이콘 임포트
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';


const TodoInsert = ({addTodos}) => {
  const [text, setText] = useState('');

  const textChange = useCallback(
      (e) => {
        // event가 발생한 타겟의 값을 바꿔버리기.
        setText(e.target.value);
      }, []) //초기 렌더링시 실행?
    
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    addTodos(text);
    //새로운 내용이 추가되므로 텍스트는 다시 빈칸.
    setText('');
  }, [addTodos, text]); //addTodos 메서드 실행, text를 매개변수로 함께 주어짐.

  return (
    <form className='TodoInsert' onSubmit={handleSubmit}>
        <input value={text}
               onChange={textChange} //그걸 onChange에서 받는다.
               placeholder='일정을 입력하세요.'></input>
        <button type='submit'>
            <MdAdd></MdAdd>
        </button>
    </form>
  )
};

export default TodoInsert;