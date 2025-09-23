import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>Hola mundo</>,
    errorElement: <>error</>,
    children: [
      {
        index: true,
        element: <>home</>,
      },
      {
        path: "/games",
        element: <>Juegos</>,
      },
    ],
  },
]);

export default router;
