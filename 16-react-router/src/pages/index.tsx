import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <>Productos</>,
  },
]);

export default router;
