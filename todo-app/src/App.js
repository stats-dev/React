import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoTemplate>
      {/* children으로 보내주겠다. */}
      <TodoInsert></TodoInsert>
      <TodoList></TodoList>
    </TodoTemplate>
  );
}

export default App;
