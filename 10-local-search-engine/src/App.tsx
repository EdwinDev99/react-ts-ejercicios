import { useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [query, setQuery] = useState(""); // lo que busca el usuario
  const [results, setResults] = useState<string[]>([]);

  const users = ["Ana", "Edwin", "Carlos", "Cathalina"];

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
    setResults(filtered);
    console.log("Buscando", query);
  }, [query]);

  return (
    <div>
      <Input onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {results.length > 0 ? (
          results.map((user) => <li key={user}>{user}</li>)
        ) : (
          <li>no se encontraron resultados</li>
        )}
      </ul>
    </div>
  );
}

export default App;
