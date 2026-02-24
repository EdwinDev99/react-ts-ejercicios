import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="flex justify-around p-9 bg-orange-200  ">
        <div>
          <h5 className="font-medium">MAISON</h5>
          <p>
            Productos cuidadosamente seleccionados para un estilo de vida con
            intención.
          </p>
        </div>
        <div className="flex flex-col">
          <h5 className="font-medium">Navegacion</h5>
          <Link to={"/"}>inicio</Link>
          <Link to={"/store"}>Tienda</Link>
        </div>
        <div>
          <h5 className="font-medium">Contacto</h5>
          <p>Edwindev99@gmail.com</p>
        </div>
      </section>
      <div className=" flex bg-orange-200 justify-center p-9">
        <p className="">© 2026 MAISON. Edwin Ayerbe Rojas.</p>
      </div>
    </>
  );
}

export default Footer;
