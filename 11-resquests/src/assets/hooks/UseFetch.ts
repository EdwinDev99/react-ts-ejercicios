import { useEffect, useState } from "react";

type User = {
  id: number | string;
  name: string;
  username: string;
};

export default function useFetch() {
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
  return {
    data,
    loading,
    error,
    query,
    setQuery,
    filteredData,
    setFilteredData,
  };
}
