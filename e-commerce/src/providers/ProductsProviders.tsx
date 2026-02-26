import { useState, type ReactNode } from "react";
import ProductsContext from "../context/ProductsContext";
import type { ProductType } from "../types/ProductType";
import product1 from "../assets/product-1.jpg";
import product2 from "../assets/product-2.jpg";
import product3 from "../assets/product-3.jpg";
import product4 from "../assets/product-4.jpg";

type Props = {
  children: ReactNode;
};

function ProductsProviders({ children }: Props) {
  const [products] = useState<ProductType[]>([
    {
      id: 0,
      name: "Bolso de cuero",
      price: 189.0,
      image: product1,
      quantity: 1,
    },
    {
      id: 1,
      name: "Sneakers Clasicos",
      price: 129.0,
      image: product2,
      quantity: 1,
    },
    {
      id: 2,
      name: "Taza Artesanal",
      price: 34.0,
      image: product3,
      quantity: 1,
    },
    {
      id: 3,
      name: "Bufanda de lana",
      price: 68.0,
      image: product4,
      quantity: 1,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProviders;
