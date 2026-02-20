import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "store", element: <>Store</> },
    ],
  },
]);

export default router;
