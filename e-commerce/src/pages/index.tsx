import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import App from "../App";
import Store from "../components/Store";
import Cart from "../components/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
