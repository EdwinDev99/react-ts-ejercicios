import "./App.css";
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

export default function App() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: queryTodos,
  });

  if (error) return <h2>{error.message}:(</h2>;
  if (isLoading) return <h2>Cargando.....</h2>;

  return (
    <>
      <h2>Todos</h2>
      <ul>
        {data?.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
