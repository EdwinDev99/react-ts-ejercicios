import { useState, type ReactNode } from "react";
import ProductsContext from "../context/ProductsContext";
import type { ProductType } from "../types/productType";

type Props = {
  children: ReactNode;
};

function ProductsProviders({ children }: Props) {
  const [products] = useState<ProductType[]>([
    {
      id: 0,
      name: "Bolso de cuero",
      price: 189.0,
    },
    {
      id: 1,
      name: "Sneakers Clasicos",
      price: 189.0,
    },
    {
      id: 2,
      name: "Taza Artesanal",
      price: 189.0,
    },
    {
      id: 3,
      name: "Bufanda de lana",
      price: 189.0,
    },
  ]);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProviders;
