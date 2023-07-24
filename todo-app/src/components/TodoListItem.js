import React from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo, removeTodos, changeChecked}) => {
  //비구조 할당으로 props의 내용 분리, 특히 removeTodos를 위해 id값도 보내주겠다.
  const {id, text, checked} = todo;


  return (
    <div className='TodoListItem'>
        {/* classNames 라이브러리를 이용한 조건부 스타일 적용 */}
        {/* 문자열로 된 'checkbox'는 무조건 실행되는 클래스이다. 이걸 조건을 주지 않으면 늘 실행함. */}
        <div className={cn('checkbox', {checked})} onClick={() => changeChecked(id)}>
            {
              // checked가 true이면 Mdcheckbox값 넣는다. 거짓이면 outline blank로 그대로 두겠다.
              checked ?
               <MdCheckBox></MdCheckBox> :
               <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
            }
            {/* 원래 할 일 인 부분이 text값으로 가져옴. */}
            <div className='text'>{text}</div>
        </div>
        {/* 매개변수 있으니 화살표 함수 쓴다. */}
        <div className='remove' onClick={() => removeTodos(id)}>
            <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
    </div>
  )
}

export default TodoListItem