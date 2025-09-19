import { useNavigate } from "react-router-dom";

function Home() {
  throw new Error("Error triste");
  const navigate = useNavigate();
  return (
    <>
      <h2>hola mundo componente home.tsx</h2>
      <button onClick={() => navigate("/Products")}>enviar</button>
    </>
  );
}

export default Home;
