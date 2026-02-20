import { useNavigate } from "react-router-dom";
import heroBanner from "../assets/hero-banner.jpg";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <section className="w-full h-[80vh] relative overflow-hidden">
        <img
          src={heroBanner}
          alt="home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-end p-40 ">
          <h1 className="text-amber-50 text-6xl py-5">Nueva Coleccion</h1>
          <p className="text-amber-50 py-5 text-2xl">
            Piezas atemporales diseñadas con propósito y simplicidad.
          </p>
          <button
            onClick={() => navigate("/store")}
            className="p- w-50 h-12 bg-white rounded-xl"
          >
            Explorar
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
