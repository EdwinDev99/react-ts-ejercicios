import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useContext(CartContext);

  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-amber-50 shadow z-50 flex justify-around items-center p-5">
      <Link className="font-medium text-2xl" to="/">
        MAISON
      </Link>
      <Link to="/">HOME</Link>
      <Link to="/store">STORE</Link>

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/cart")}
      >
        <FiShoppingBag size={20} />
        <span className="font-bold">{totalItems}</span>
      </div>
    </header>
  );
}

export default Navbar;
