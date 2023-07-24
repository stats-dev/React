import React from 'react'
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import '../scss/TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({todo}) => {
  //비구조 할당으로 props의 내용 분리
  const {text, checked} = todo;


  return (
    <div className='TodoListItem'>
        {/* classNames 라이브러리를 이용한 조건부 스타일 적용 */}
        <div className={cn('checkbox', {checked})}>
            {
              // checked가 true이면 Mdcheckbox값 넣는다. 거짓이면 outline blank로 그대로 두겠다.
              checked ?
               <MdCheckBox></MdCheckBox> :
               <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
            }
            {/* 원래 할 일 인 부분이 text값으로 가져옴. */}
            <div className='text'>{text}</div>
        </div>
        <div className='remove'>
            <MdRemoveCircleOutline></MdRemoveCircleOutline>
        </div>
    </div>
  )
}

export default TodoListItem