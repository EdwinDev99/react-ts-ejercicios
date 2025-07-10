import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState(["tarea"]);

  const addTask = (newTask: string) => {
    if (newTask.trim() === "") return;
    setTasks(() => [...tasks, newTask]);
  };

  const removeTask = (taskToRemove: string) => {
    setTasks((prev) => prev.filter((task) => task !== taskToRemove));
  };

  return (
    <div className="container-sm">
      <Input onAddTask={addTask} />
      <List data={tasks} onRemoveTask={removeTask} />
    </div>
  );
}

export default App;
