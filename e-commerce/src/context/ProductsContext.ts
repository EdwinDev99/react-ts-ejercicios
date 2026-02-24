import { createContext } from "react";
import type { ProductType } from "../types/productType";

type ProductsContextType = {
  products: ProductType[];
};

export default createContext<ProductsContextType>({} as ProductsContextType);
