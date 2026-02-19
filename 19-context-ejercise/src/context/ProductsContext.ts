import { createContext } from "react";
import type { Product } from "../types/Product";

type ProductsContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  increaseProduct: (id: number) => void;
  decreaseProduct: (id: number) => void;
  deleteProduct: (id: number) => void;
  totalValue: () => number;
};

export default createContext<ProductsContextType>({} as ProductsContextType);
