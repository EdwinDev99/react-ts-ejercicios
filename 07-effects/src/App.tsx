import useHttpData from "./hooks/useHttpData";

type User = {
  id?: string | number;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const {
    loading,
    error,
    data: users,
    // addData: addUser,
    // deleteData: deleteUser,
    updateData: updateUser,
  } = useHttpData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Ha ocurrido un error{error}</p>;
  }

  return (
    <ul>
      <button onClick={() => updateUser({ id: 1, name: "chanchito feliz" })}>
        enviar
      </button>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
