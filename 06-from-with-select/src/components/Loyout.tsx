import { useState } from "react";
import ListProducts from "./ListProducts";
import ProdusctsForm from "./ProdusctsForm";
import type { Product } from "../schemas/productShema";

function Loyout() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    const newProduct = { ...product, id: Math.random().toString() };
    setProducts([...products, newProduct]);
  };

  console.log(products);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ProdusctsForm onSubmit={addProduct} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ListProducts products={products} />
        </div>
      </div>
    </div>
  );
}

export default Loyout;
