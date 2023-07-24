import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useRef, useReducer } from "react";

const bulkTodos = () => {
  const todoArray = [];
  for(let i = 1; i <= 2500; i++) {
    const todo = {
      id: i,
      text: `할 일${i}`,
      checked: false
    }

    todoArray.push(todo);
  }
  return todoArray;
}

//리듀서메소드의 첫번째 매개변수로는 state값이 온다.
//리듀서메소드의 두번째 매개변수로는 dispatch메소드의 매개변수가 온다.
//이 두가지 매개변수는 t,a처럼 마음대로 변경해도 좋다.
//action = {type: 'INSERT', todo: {id: , text: , checked: }}
//action = {type: 'REMOVE', id: }
//action = {type: 'TOGGLE', id: }
function reducer(todos, action) {
  switch(action.type) {
    //{type: 'INSERT}, todo: {id: 1, text: 'react', checked: true/false}
    case 'INSERT':
      return todos.concat(action.todo);
      //{type: 'REMOVE', id: 2}
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    //{type: 'TOGGLE', id: 3}
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? 
        {...todo, checked: !todo.checked} : todo);
    default:
      return null;
  }
}


function App() {
  //useReducer: state를 생성하는 Hook, setter메소드 대신 dispatch라는 메소드를 갖는다. 
  //첫 번째 매개변수로 리듀서메소드를 매핑. 리듀서메소드는 상황에 따라서 state값을 다르게 변경하도록 구현.
  //dispatch 메소드가 action을 발생시키면서 자동적으로 지정된 리듀서메소드를 호출한다.
  const [todos, dispatch] = useReducer(reducer, undefined, bulkTodos);
  // const [todos, setTodos] = useState(bulkTodos);

  //todos의 고유한 id를 생성하기 위한 useRef 3번까지 있으니 4번도 실행.
  const nextId = useRef(2501);

  //todoInsert에서 새로운 todo추가 하는 메소드
  const addTodos = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false
    };

    //dispatch로 액션을 실행 시킨다. 액션이 실행되면서 useReducer에 매핑해놓은 리듀서메소드가 자동적으로 실행된다.
    //위에서 만든 todo라는 객체를 보내준다.
    //dispatch 메소드의 매개변수를 action이라고 부른다.
    dispatch({type: 'INSERT', todo: todo})

    nextId.current += 1;
    //이렇게 []해서 멋지게 최초 렌더링시에만 진행하게 된다.
  }, []);

  //일정 지우는 메소드
  const removeTodos = useCallback((id) => {
    //dispatch로 액션을 실행 시킨다.
    dispatch({type: 'REMOVE', id: id})
  }, []);


  //checkBox 이벤트 발생 시 checked 변경 메소드
  // id를 받아옵니다.
  const changeChecked = useCallback((id) => {

    //dispatch로 액션을 실행 시킨다.
    dispatch({type: 'TOGGLE', id: id})
  }, []);


  return (
    <TodoTemplate>
      <TodoInsert addTodos={addTodos}></TodoInsert>
      <TodoList todos={todos} removeTodos={removeTodos} changeChecked={changeChecked}></TodoList> 
    </TodoTemplate>
  );
}

export default App;
