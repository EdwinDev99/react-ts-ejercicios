import Card from "./Card";
import Footer from "./Footer";

function Store() {
  return (
    <div className="flex justify-center items-center p-30">
      <main className="flex flex-col ">
        <span className="text-2xl">Coleccion</span>
        <h2 className="text-4xl py-9">Todos los Productos</h2>
        <section className="flex justify-around flex-wrap gap-4 mb-2.5 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>

      <section className="absolute bottom-0 w-full">
        <Footer />
      </section>
    </div>
  );
}

export default Store;
