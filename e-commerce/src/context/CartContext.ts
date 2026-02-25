// context/CartContext.ts
import { createContext } from "react";
import type { CartItem, ProductType } from "../types/ProductType";

type CartContextType = {
  cart: CartItem[];
  addProductCart: (product: ProductType) => void;
  sumProduct: (id: number) => void;
  resProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  totalItems: number;
  totalPrice: number;
};

export default createContext<CartContextType>({} as CartContextType);
