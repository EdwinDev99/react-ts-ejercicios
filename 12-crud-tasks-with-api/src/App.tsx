import { useEffect, useState } from "react";
import "./App.css";

type Task = {
  id?: number | string;
  title: string;
};

const url = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setLoading(true);

    fetch(url, { signal })
      .then((response) => response.json())
      .then((data) => {
        setData(data.slice(0, 20));
        setError("");
      })

      .catch(() => setError("Error desconocido"))
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, []);

  const addData = async (element: Task) => {
    const initialData = [...data];
    setData([{ id: 0, ...element }, ...data]);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(element),
        headers: { "Content-type": "application/json" },
      });
      if (!response.ok) {
        setData(initialData);
        throw new Error(`${response.status}`);
      }
      const savedData = await response.json();
      setData([savedData, ...initialData]);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  if (loading) {
    return <p>Cargandoo...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <button onClick={() => addData({ title: "chancho feliz" })}>
        {""}
        Enviar
      </button>
      <ul>
        {data.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
