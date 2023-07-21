import React from 'react';
//+ 아이콘 임포트
import {MdAdd} from 'react-icons/md';
import '../scss/TodoInsert.scss';


const TodoInsert = () => {
  return (
    <form className='TodoInsert'>
        <input placeholder='일정을 입력하세요.'></input>
        <button type='submit'>
            <MdAdd></MdAdd>
        </button>
    </form>
  )
};

export default TodoInsert;