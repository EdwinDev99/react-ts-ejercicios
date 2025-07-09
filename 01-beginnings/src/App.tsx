import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import Card from "./Components/Card";
import List from "./Components/List";

function App() {
  const list = ["Goku", "Tanjiro", "vegeta"];
  const [loading, setLoading] = useState(false);

  const handleSelect = (elemento: string) => {
    console.log(`imprimiendo ${elemento}`);
  };

  const handleclick = () => {
    setLoading(!loading);
  };

  return (
    <Card title="Hola mundo" text="Esto es el texto">
      <List data={list} onSelect={handleSelect} />
      <Button loading={loading} onClick={handleclick}>
        hola mundo
      </Button>
    </Card>
  );
}

export default App;
