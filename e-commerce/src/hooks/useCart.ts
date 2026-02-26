import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function UseCart() {
  return useContext(CartContext);
}
