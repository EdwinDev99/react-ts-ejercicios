import useHttpData from "./hooks/useHttpData";

type User = {
  id?: string;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const {
    loading,
    error,
    data: users,
    addData: addUser,
    deleteData: deleteUser,
  } = useHttpData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error{error}</p>;
  }

  return (
    <ul>
      <button onClick={() => deleteUser(1)}> eliminar</button>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
