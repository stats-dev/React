import { useCallback, useState, useEffect } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([]);
  const navi = useNavigate();
 
 
  //처음 렌더링될 때 DB에 저장되어있는 리스트 호출하기
  useEffect(() => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    console.log(token);
    const getTodoList = async () => {
      try {
        const response = await axios.get('http://localhost:9090/api/todo/todo', {
          // params: {
          //   id: id
          // }, //현재 get방식은 param 안받는다.
          //config 자리에 헤더, 파라미터를 여기에 넣는다.
          headers: {
            // Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`//Boot에 있는 getHeader
            "Authorization": "Bearer " + token
          }
        });

        console.log(response);
        setTodos(() => response.data.items);
      } catch(e) {
        console.log(e)
        navi("/login");
      }
    };

    getTodoList();
  }, []);

  //todoInsert에서 새로운 todo추가 하는 메소드
  const addTodos = useCallback((text) => {
    console.log(todos.length);

    const todo = {
      id: todos.length + 1,
      text: text,
      checked: false
    };

    const insertTodo = async () => {
      try {
        const response = await axios.post('http://localhost:9090/api/todo/todo', todo, {
          headers: {
            //config 부분에 객체 하나 더 열어준다.
            Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
          }
        });

        setTodos(() => response.data.items); //리스트 형태로 반환.
      } catch (e) {
        console.log(e);
      }
    }

    insertTodo();
  }, [todos]);


    //일정 지우는 메소드
    const removeTodos = useCallback((id) => {
      const deleteTodo = async () => {
        try {
          const response = await axios.delete('http://localhost:9090/api/todo/todo', {
            params : {
              id: id
            }, 
            headers: {
              Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
            }
          });
          
          setTodos(() => response.data.items);
        } catch (e) {
          console.log(e);
        }
      }

      deleteTodo();
    }, [todos]);



  //checkBox 이벤트 발생 시 checked 변경 메소드
  // id를 받아옵니다.
  const changeChecked = useCallback((todo) => {
    const updateTodo = async () => {
      try {
        const response = await axios.put('http://localhost:9090/api/todo/todo', {...todo, checked: !todo.checked},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem, ("ACCESS_TOKEN")}`
          }
        });
      setTodos(() => response.data.items);
      } catch (error) {
        console.log(error);
      }
    }

    updateTodo();
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
