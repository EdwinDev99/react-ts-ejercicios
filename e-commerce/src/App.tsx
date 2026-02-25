import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsProviders from "./providers/ProductsProviders";

function App() {
  return (
    <ProductsProviders>
      <Navbar />
      <main className="pt-24">
        <Outlet />
      </main>
    </ProductsProviders>
  );
}

export default App;
