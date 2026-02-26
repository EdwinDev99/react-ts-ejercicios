import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import UseCart from "../hooks/useCart";

function Cart() {
  const navigate = useNavigate();
  const { cart, sumProduct, resProduct, removeProduct, totalPrice } = UseCart();

  if (cart.length === 0) {
    return (
      <section className="flex flex-col justify-center items-center p-20">
        <FiShoppingBag size={80} />
        <h2>Tu carrito está vacío</h2>
        <p>Explora nuestra colección y encuentra algo especial.</p>
        <button
          className="bg-black text-amber-50 p-4 m-3 rounded-2xl"
          onClick={() => navigate("/store")}
        >
          IR A LA TIENDA
        </button>
      </section>
    );
  }

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-amber-50 p-4 rounded-2xl shadow-md flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-40 h-40 object-contain mb-3"
            />
            <h4 className="font-semibold">{product.name}</h4>
            <p className="font-bold">${product.price}</p>

            <div className="p-2 flex items-center gap-3">
              <button onClick={() => resProduct(product.id)}>-</button>
              <span className="font-bold">{product.quantity}</span>
              <button onClick={() => sumProduct(product.id)}>+</button>
            </div>

            <p className="font-medium">
              Subtotal: ${product.price * product.quantity}
            </p>

            <button
              className="text-red-600 mt-2"
              onClick={() => removeProduct(product.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </section>

      <section className="p-6 text-right font-bold text-xl">
        Total: ${totalPrice}
      </section>

      <Footer />
    </>
  );
}

export default Cart;
