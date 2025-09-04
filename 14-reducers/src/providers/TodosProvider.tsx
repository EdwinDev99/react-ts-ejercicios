import { useReducer, type ReactNode } from "react";
import todosReducers from "../reducers/todosReducers";
import TodosContext from "../contexts/TodosContext";

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
