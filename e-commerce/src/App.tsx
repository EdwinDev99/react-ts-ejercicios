import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>

      <section className="bottom-0 w-full">
        <Footer />
      </section>
    </>
  );
}

export default App;
