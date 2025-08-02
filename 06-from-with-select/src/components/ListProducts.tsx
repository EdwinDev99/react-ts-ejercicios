import type { Product } from "../schemas/productShema";

type Props = {
  products: Product[];
};

function ListProducts({ products }: Props) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">Producto</th>
            <th scope="col">Contry</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              {/* <th scope="row">{index + 1}</th> */}
              <td>{p.product}</td>
              <td>{p.contry}</td>
              <td>{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProducts;
