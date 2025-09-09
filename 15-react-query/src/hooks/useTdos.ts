import { useQuery } from "@tanstack/react-query";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

const queryTodos = (): Promise<Todo[]> =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
    if (!response.ok) throw Error(`Error${response.status}`);
    return response.json();
  });

function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: queryTodos,
  });
}

export default useTodos;
