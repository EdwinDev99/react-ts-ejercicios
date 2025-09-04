import { create } from "zustand";
import type { Todo } from "./TodosProvider";

type TodosStore = {
  todos: Todo[]; // corregido: debe ser "todos"
  add: (todo: Todo) => void;
  destroy: (id: number) => void;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  add: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo], // agregar al array
    })),
  destroy: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id), // eliminar por id
    })),
}));

export default useTodosStore;
