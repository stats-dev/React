import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    //객체 array
    {
      id: 1,
      text: 'react',
      checked: true
    },
    {
      id: 2,
      text: 'es6',
      checked: false
    },
    {
      id: 3,
      text: 'html/css',
      checked: false
    }
  ]);


  return (
    <TodoTemplate>
      {/* children으로 보내주겠다. */}
      <TodoInsert></TodoInsert>
      {/* todos라는 props 보내주기 */}
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
  );
}

export default App;
