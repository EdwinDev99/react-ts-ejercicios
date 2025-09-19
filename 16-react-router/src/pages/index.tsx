import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorDetail />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "Products",
        element: <Product />,
      },
      {
        path: "Product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
