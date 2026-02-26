import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

export default function UseProduct() {
  return useContext(ProductsContext);
}
