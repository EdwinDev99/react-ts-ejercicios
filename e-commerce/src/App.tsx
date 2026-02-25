import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsProviders from "./providers/ProductsProviders";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <ProductsProviders>
      <CartProvider>
        <Navbar />
        <main className="pt-24">
          <Outlet />
        </main>
      </CartProvider>
    </ProductsProviders>
  );
}

export default App;
