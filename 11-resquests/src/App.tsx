import { useEffect, useState } from "react";
import Input from "./assets/Components/Input";

type User = {
  id: number | string;
  name: string;
  username: string;
};

function App() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const hook = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";

      setLoading(true);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data: User[] = await response.json();
        console.log(data[0].name);
        setFilteredData(data);
        setData(data);
        setError(undefined);
      } catch (error) {
        if (error) {
          setError((error as Error).message);
        } else {
          setError("Error desconocido");
        }
      } finally {
        setLoading(false);
      }
    };

    hook();
    return () => controller.abort();
  }, []);
  useEffect(() => {
    const lower = query.toLowerCase();
    const filtered = data.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.username.toLowerCase().includes(lower)
    );
    setFilteredData(filtered);
  }, [query, data]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <Input value={query} onChange={setQuery} />
      {filteredData.length === 0 ? (
        <p style={{ color: "red" }}>No se encontraron usuarios</p>
      ) : (
        <ul>
          {filteredData.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
