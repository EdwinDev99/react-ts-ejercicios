import { Link } from "react-router-dom";

type Props = {};

function Product({}: Props) {
  const products = [
    { id: 1, name: "iphone" },
    { id: 2, name: "android" },
  ];
  return (
    <>
      <div>Pagina de productos</div>
      <Link to={"/"}>Ininio</Link>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/Product/${p.id}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
