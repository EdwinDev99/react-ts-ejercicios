import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Product />,
  },
  {
    path: "/Product/:id",
    element: <ProductDetail />,
  },
]);

export default router;
