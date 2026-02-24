import { Link, useNavigate } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-amber-50 shadow z-50 flex justify-around items-center p-5">
      <Link className="font-medium text-2xl" to="/">
        MAISON
      </Link>
      <Link to="/">HOME</Link>
      <Link to="/store">STORE</Link>
      <FiShoppingBag size={20} onClick={() => navigate("/cart")} />
    </header>
  );
}

export default Navbar;
