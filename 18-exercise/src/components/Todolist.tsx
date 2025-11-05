import { useState } from "react";
import TaskItem from "./TaskItem";

type Task = {
  text: string;
  done: boolean;
};

function Todolist() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<"all" | "done" | "pending">("all");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addTask = () => {
    if (text.trim() == "") return;
    setTasks([...tasks, { text, done: false }]);
    setText("");
  };

  const taggleTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filterTask = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  const startEdit = (index: number) => {
    setEditingIndex(index);
    setText(tasks[index].text);
  };

  return (
    <div>
      <h1>Lista</h1>
      <input
        type="text"
        placeholder="Add taks"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTask}>Agregar </button>

      <button onClick={() => setFilter("all")}> Todas</button>
      <button onClick={() => setFilter("done")}>Competadas</button>
      <button onClick={() => setFilter("pending")}>Pendientes</button>
      <ul>
        {filterTask.map((t, i) =>
          editingIndex === i ? (
            <li key={i}>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                onClick={() => {
                  setTasks(
                    tasks.map((task, idx) =>
                      idx === i ? { ...task, text } : task
                    )
                  );
                  setEditingIndex(null);
                  setText("");
                }}
              >
                Guardar
              </button>
            </li>
          ) : (
            <TaskItem
              key={i}
              name={t.text}
              done={t.done}
              onToggle={() => taggleTask(i)}
              onDelete={() => deleteTask(i)}
              onStartEdit={() => startEdit(i)}
            />
          )
        )}
      </ul>
    </div>
  );
}

export default Todolist;
