import { NavLink, Outlet } from "react-router-dom";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <NavLink className={({ isActive }) => (isActive ? "enadled" : "")} to="/">
        inicio
      </NavLink>{" "}
      <NavLink to="/Products">Products</NavLink>
      <Outlet />
    </div>
  );
}

export default Layout;
