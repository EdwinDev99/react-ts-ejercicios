import { useState, type ReactNode } from "react";
import type { Product } from "../types/Product";
import ProductsContext from "../context/ProductsContext";

type Props = {
  children: ReactNode;
};

function ProductsProvider({ children }: Props) {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 0,
      name: "papa",
      amount: 1,
    },
    {
      id: 1,
      name: "carne",
      amount: 1,
    },
  ]);

  const addProduct = (product: Product) => {
    setProducts([product, ...products]);
  };

  const increaseProduct = (id: number) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, amount: p.amount + 1 } : p)),
    );
  };

  const decreaseProduct = (id: number) => {
    setProducts((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, amount: p.amount - 1 } : p))
        .filter((p) => p.amount > 0),
    );
  };

  const deleteProduct = (id: number) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const totalValue = () => {
    return products.reduce((acc, p) => acc + p.amount, 0);
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        increaseProduct,
        decreaseProduct,
        deleteProduct,
        totalValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
