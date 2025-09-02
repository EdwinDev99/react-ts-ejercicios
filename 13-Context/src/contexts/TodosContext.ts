import { createContext } from "react";
import type { Todo } from "../types/Todo";

type TodosContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
};

export default createContext<TodosContextType>({} as TodosContextType);
