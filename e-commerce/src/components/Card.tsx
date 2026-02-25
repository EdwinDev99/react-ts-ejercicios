import { useContext } from "react";
import CartContext from "../context/CartContext";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
};

function Card({ product }: { product: Product }) {
  const { addProductCart } = useContext(CartContext);

  return (
    <div className="w-100 bg-amber-50 p-4 rounded-2xl">
      <h4 className="text-amber-900 py-2.5 font-bold">Accesorios</h4>

      <img src={product.image} alt={product.name} className="rounded-2xl" />
      <p className="py-1">{product.name}</p>
      <p className="py-1">${product.price}</p>
      <button
        onClick={() => addProductCart(product)}
        className="p-4 bg-amber-200 rounded-2xl "
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Card;
