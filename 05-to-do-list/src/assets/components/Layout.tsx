import { useState } from "react";
import ListForm from "./ListForm";
import ToDoList from "./ToDoList";
import type { Task } from "../../schemas/task";

type Props = {};

function Layout({}: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    const newTask = { ...task, id: Math.random().toString() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  console.log(tasks);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ListForm onSubmit={addTask} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ToDoList tasks={tasks} onClick={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
