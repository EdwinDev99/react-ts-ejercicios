type Product = {
  id: string;
  name: string;
};

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <div>
      {products.map((p) => (
        <ul>
          <li key={p.id}>{p.name}</li>
        </ul>
      ))}
    </div>
  );
}

export default ProductList;
