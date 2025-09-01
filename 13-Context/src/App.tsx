import { useState } from "react";
import "./App.css";
import type { Todo } from "./types/Todo";
import Dashboard from "./Components/Dashboard";
import MainContent from "./Components/MainContent";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 0, name: "Cocinar", completed: false },
    { id: 1, name: "ordenar closet", completed: false },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <>
      <Dashboard amount={todos.length} />
      <MainContent todos={todos} addTodo={addTodo} />
    </>
  );
}

export default App;
