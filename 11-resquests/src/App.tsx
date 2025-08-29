import { useEffect } from "react";
import Input from "./assets/Components/Input";
import useFetch from "./assets/hooks/UseFetch";

function App() {
  const {
    query,
    loading,
    data,
    setFilteredData,
    filteredData,
    error,
    setQuery,
  } = useFetch();

  useEffect(() => {
    const lower = query.toLowerCase();
    const filtered = data.filter(
      (user) =>
        user.name.toLowerCase().includes(lower) ||
        user.username.toLowerCase().includes(lower)
    );
    setFilteredData(filtered);
  }, [query, data, setFilteredData]);

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
