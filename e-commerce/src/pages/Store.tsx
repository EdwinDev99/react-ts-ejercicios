import Card from "../components/Card";
import Footer from "../components/Footer";
import UseProduct from "../hooks/useProducts";

function Store() {
  const { products } = UseProduct();
  return (
    <div className="flex justify-center items-center p-30">
      <main className="flex flex-col ">
        <span className="text-2xl">Coleccion</span>
        <h2 className="text-4xl py-9">Todos los Productos</h2>
        <section className="flex justify-start flex-wrap gap-4 mb-12">
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </section>
      </main>

      <section className="absolute bottom-0 w-full">
        <Footer />
      </section>
    </div>
  );
}

export default Store;
