import { useState } from "react";
import Button from "./components/Button";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      id: Math.random().toString(),
      name: "iphone",
    },
  ]);

  const add = () => {
    const newProduct = { id: Math.random().toString(), name: "Android" };
    setProducts([newProduct, ...products]);
  };

  const final = () => {
    const newProduct = { id: Math.random().toString(), name: "SurfBoard" };
    setProducts([...products, newProduct]);
  };

  const deleteLast = () => {
    setProducts(products.slice(0, -1));
  };

  const clean = () => {
    setProducts([]);
  };

  return (
    <div>
      <Button onClick={add}>Comienzo</Button>
      <Button onClick={final}>Final</Button>
      <Button onClick={deleteLast}>Eliminar ultimo</Button>
      <Button onClick={clean}>Limpiar</Button>
      <ProductList products={products} />
    </div>
  );
}

export default App;
