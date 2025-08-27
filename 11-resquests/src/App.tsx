import { useEffect, useState } from "react";

type User = {
  id: number | string;
  name: string;
  username: string;
};

function App() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const hook = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      setLoading(true);

      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error("error en la petición");
        }

        const data: User[] = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
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

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
