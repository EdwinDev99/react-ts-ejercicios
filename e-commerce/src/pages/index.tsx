import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import App from "../App";
import Store from "./Store";
import Cart from "./Cart";

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
