import useTodos from "./hooks/useTdos";

export default function App() {
  const { data, isLoading, error } = useTodos();

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
