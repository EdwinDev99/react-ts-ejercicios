import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorDetail from "./ErrorDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <Layout>
        <ErrorDetail />
      </Layout>
    ),
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
