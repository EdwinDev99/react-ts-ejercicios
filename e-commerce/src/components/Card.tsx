import producOne from "../assets/product-1.jpg";

type Product = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
};

function Card({ product }: { product: Product }) {
  return (
    <div className="w-100 bg-amber-50 p-4 rounded-2xl">
      <h4 className="text-amber-900 py-2.5 font-bold">Accesorios</h4>

      <img src={producOne} alt={product.name} className="rounded-2xl" />
      <p className="py-1">{product.name}</p>
      <p className="py-1">${product.price}</p>
    </div>
  );
}

export default Card;
