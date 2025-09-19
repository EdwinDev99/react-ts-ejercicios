import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import ProductDetail from "./ProductDetail";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";
import AuthorizedUser from "./AuthorizedUser";
import Product from "./Product";

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
        element: <AuthorizedUser />,
        children: [
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
    ],
  },
]);

export default router;
