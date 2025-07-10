import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import List from "./Components/List";

function App() {
  const [list, setList] = useState(["goku", "Tanjiro", "Vegeta"]);

  const handleSelect = (elemento: string) => {
    console.log(`imprimiendo ${elemento}`);
  };

  const addMinions = () => {
    setList(() => [...list, "minion"]);
  };

  const deleteminion = () => {
    setList((prev) => prev.slice(0, -1));
  };

  return (
    <Card title="Hola mundo" text="Esto es el texto">
      <Button onClick={addMinions}>Agregar</Button>
      <Button onClick={deleteminion}>Eliminar</Button>
      <List data={list} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
