import React from 'react'
import TodoListItem from './TodoListItem';
import '../scss/TodoList.scss';



const TodoList = ({todos, removeTodos, changeChecked}) => { 
  // todos라는 키로 이걸 받아주겠다.
  return (
    <div className='TodoList'>
      {/* map 메소드로 todos 배열의 내용을 하나씩 TodoListItem의 props로 보내기 key는 todos의 id 값으로 */}
        {/* 단축평가 */}
        {todos && todos.map((todo) => 
          // 객체인 todo 자체도 바로 보낼 수 있다. 굳이 아래처럼 안 나눠도 될 듯 싶다. 이걸 다시 todolistItem에 가서 받아준다.
          // removeTodos도 함께 보내겠다. TodoListItem으로 전달할 수 있다.
          // ListItem에도 props로 changeChecked를 보내어 준다.
          <TodoListItem key={todo.id} todo={todo} removeTodos={removeTodos} changeChecked={changeChecked}></TodoListItem>)}

        {/* {todos.map((todo) => (
              <TodoListItem key={todo.id} id={todo.id} text={todo.text} checked={todo.checked}/>
          
          ))} */}
    </div>
  )
}

export default TodoList