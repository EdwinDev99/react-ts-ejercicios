import { create } from "zustand";

type Todo = {
  id: number;
  name: string;
};

type TodosStore = {
  todos: Todo[]; // corregido: debe ser "todos"
  add: (todo: Todo) => void;
  destroy: (id: number) => void;
  total: number;
};

const useTodosStore = create<TodosStore>((set) => ({
  todos: [],
  total: 0,
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
