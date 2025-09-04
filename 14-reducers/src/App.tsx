import { useReducer } from "react";

type Action = {
  type: string;
};

const reducer = (contador: number, action: Action) => {
  switch (action.type) {
    case "INCREMENT":
      return contador + 1;
    case "DECRESE":
      return contador - 1;
    case "RESET":
      return 0;
  }

  return contador;
};

function App() {
  const [contador, dispatch] = useReducer(reducer, 0);

  const sumar = () => {
    dispatch({ type: "INCREMENT" });
  };

  const restar = () => {
    dispatch({ type: "DECRESE" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
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
