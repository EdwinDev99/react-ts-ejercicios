import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

function Dashboard() {
  const { products } = useContext(ProductsContext);

  return <div>{products.length}</div>;
}

export default Dashboard;
