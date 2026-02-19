import Dashboard from "./components/Dashboard";
import ProductsList from "./components/ProductsList";

import ProductsProvider from "./Providers/ProductsProvider";

function App() {
  return (
    <ProductsProvider>
      <Dashboard />
      <ProductsList />
    </ProductsProvider>
  );
}

export default App;
