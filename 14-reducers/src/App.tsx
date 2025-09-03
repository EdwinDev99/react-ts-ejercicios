import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  const reset = () => {
    setContador(0);
  };

  return (
    <>
      <h1>Hola mundo{contador}</h1>
      <button onClick={sumar}>Incrementar</button>
      <button onClick={restar}>Reducir</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
