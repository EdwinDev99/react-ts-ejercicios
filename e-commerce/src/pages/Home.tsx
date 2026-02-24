import { useNavigate } from "react-router-dom";
import heroBanner from "../assets/hero-banner.jpg";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

function Home() {
  const { products } = useContext(ProductsContext);
  const navigate = useNavigate();
  return (
    <>
      <section className="w-full h-[80vh] relative overflow-hidden mb-6">
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
      <section className="mb-44">
        <span className="text-2xl p-9">Seleccion</span>
        <div className="flex items-center justify-between p-9">
          <h3 className="text-5xl">Productos Destacados</h3>
          <span className="p-9">Ver Todo</span>
        </div>
        <div className="flex justify-around flex-wrap gap-4">
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
