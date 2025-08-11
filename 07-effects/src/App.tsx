import useFetchData from "./hooks/useFetchData";

type User = {
  id: string;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { loading, error, data: users } = useFetchData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error{error}</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
