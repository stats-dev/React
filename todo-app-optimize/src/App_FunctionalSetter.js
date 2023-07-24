import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useCallback, useState, useRef } from "react";

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

function App() {
  const [todos, setTodos] = useState(bulkTodos);

  //todos의 고유한 id를 생성하기 위한 useRef 3번까지 있으니 4번도 실행.
  const nextId = useRef(2501);

  //todoInsert에서 새로운 todo추가 하는 메소드
  const addTodos = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text: text,
      checked: false
    };

    //setter 메소드를 함수형으로 변경하고
    //매개변수를 넣어주면 이전의 state값이 매개변수에 담긴다.
    //특이사항이 없을 때는 setter메소드를 함수형으로 작성한다.
    setTodos(todos => {
      console.log(todos);
      return todos.concat(todo);
    }); //새로운 내용을 추가한다.

    nextId.current += 1;
    //todos의 변경이 있어야만 메소드가 생성될 수 있게 한다.
  }, []);

  //일정 지우는 메소드
  const removeTodos = useCallback((id) => {

    //filter 메소드로 id에 해당하는 todo 삭제
    setTodos(
      // 배열은 그 상태로 집어넣으면 된다. 따로 {} 해서 객체로 쓸 수 없다.
      todos.filter((todo) => todo.id !== id)
    );

  }, [todos]);


  //checkBox 이벤트 발생 시 checked 변경 메소드
  // id를 받아옵니다.
  const changeChecked = useCallback((id) => {
    setTodos(
        // 배열.map() 메소드는 새로운 배열 리턴
        todos.map(
          //매개변수로는 하나씩 순회하면서 사용할 변수명 원하는 대로 지정. 여기서는 t로 지정.
          //매개변수 t가 객체 형태이기 때문에 리턴되는 값도 객체형태
          //스프레드 문법은 ...변수명
          /* {...t} => {
                          id: 1,
                          text: 'react',
                          checked: true
                        }
              {...t, checked: !t.checked, aaa: 1} => {
                                                id: 1,
                                                text: 'react',
                                                checked: false(!true) // 덮어써져서 변환됨.
                                                aaa: 1 // 원래 있던 키 값에서 추가됨.
                                              }
          */
         // t 자체가 객체이므로 바로 리턴해줄 수 있다. 하나씩 바꿔주고 아닌 애들은 그냥 리턴한다.
          (t) => (t.id === id ? {...t, checked: !t.checked} : t)
      )
    );
  }, [todos]);


  return (
    <TodoTemplate>
      {/* children으로 보내주겠다.  addTodos라는 props도 같이 보내준다. */}
      <TodoInsert addTodos={addTodos}></TodoInsert>
      {/* todos라는 props 보내주기 todoList에서 먼저 받아주고. */}
      {/* 자식 컴포넌트에서 이벤트가 발생했을 때 부모 컴포넌트도 리렌더링 하려면 부모의 스테이트를 변경해야 한다.
          부모의 스테이트를 자식에서 변경하는 방법은 부모 컴포넌트에 스테이트의 setter 메소드를 호출하는 메소드를 정의한 뒤
          자식 컴포넌트에 props로 해당 메소드를 전달해서 자식 컴포넌트에서 이벤트가 발생했을 때 props로 받아온 메소드를 호출
          쉽게 말하면, App.js에 있는 스테이트를 변경해주는 메소드. */}
          {/* props로 List로 전달한다. */}
      <TodoList todos={todos} removeTodos={removeTodos} changeChecked={changeChecked}></TodoList> 
    </TodoTemplate>
  );
}

export default App;
