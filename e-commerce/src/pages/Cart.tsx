import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <section className="flex flex-col justify-center items-center p-20">
        <FiShoppingBag size={80} />
        <h2>Tu carrito esta vacio</h2>
        <p>Explora nuestra colección y encuentra algo especial.</p>
        <button
          className="bg-black text-amber-50 p-4 m-3 rounded-2xl"
          onClick={() => navigate("/store")}
        >
          IR A LA TIENDA
        </button>
      </section>
      <section className="absolute bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

export default Cart;
