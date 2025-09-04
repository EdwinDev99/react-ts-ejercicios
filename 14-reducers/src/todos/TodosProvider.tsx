import { useReducer, type ReactNode } from "react";

import TodosContext from "./TodosContext";

export type Todo = {
  id: number;
  name: string;
};

type AddAction = {
  type: "ADD";
  todo: Todo;
};

type DeleteAction = {
  type: "DELETE";
  todoId: number;
};

export type TodoAction = AddAction | DeleteAction;

const todosReducers = (todos: Todo[], action: TodoAction) => {
  switch (action.type) {
    case "ADD":
      return [action.todo, ...todos];
    case "DELETE":
      return todos.filter((t) => t.id !== action.todoId);
  }

  return todos;
};

type Props = {
  children: ReactNode;
};

export default function TodosProvider({ children }: Props) {
  const [todos, dispatch] = useReducer(todosReducers, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}
