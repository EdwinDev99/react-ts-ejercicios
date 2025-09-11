import useTodos from "./hooks/useTdos";

export default function App() {
  const pageSize = 15;

  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    useTodos(pageSize);

  if (error) return <h2>{error.message}:(</h2>;
  if (isLoading) return <h2>Cargando.....</h2>;
  console.log(data);
  const todos = data?.pages.flat();

  return (
    <>
      <h2>Todos</h2>

      <ul>
        {todos?.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>

      <button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "cargando" : "cargar mas"}
      </button>
    </>
  );
}
