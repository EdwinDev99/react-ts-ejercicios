import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

function ProductsList() {
  const {
    products,
    addProduct,
    deleteProduct,
    decreaseProduct,
    increaseProduct,
  } = useContext(ProductsContext);
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} {p.amount}{" "}
            <button onClick={() => decreaseProduct(p.id)}>-</button>
            <button onClick={() => increaseProduct(p.id)}>+</button>
            <button onClick={() => deleteProduct(p.id)}>delete</button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          addProduct({
            id: Math.random(),
            name: "cebolla",
            amount: 1,
          })
        }
      >
        Add
      </button>
    </>
  );
}

export default ProductsList;
