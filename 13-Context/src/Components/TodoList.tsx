import React from "react";
import type { Todo } from "../types/Todo";

type Props = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

function TodoList({ todos, addTodo }: Props) {
  return (
    <>
      <button
        onClick={() =>
          addTodo({
            id: Math.random(),
            name: "Chanchito feliz",
            completed: false,
          })
        }
      >
        agregar
      </button>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
