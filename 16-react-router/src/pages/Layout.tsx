import { Link, Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <Link to="/">inicio</Link> <Link to="/Products">Products</Link>
      <Outlet />
    </div>
  );
}

export default Layout;
