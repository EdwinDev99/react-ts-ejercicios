import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-amber-50 shadow z-50 flex justify-around items-center p-5">
      <Link to="/">MAISON</Link>
      <Link to="/">HOME</Link>
      <Link to="/store">STORE</Link>
      <FiShoppingBag size={20} />
    </header>
  );
}

export default Navbar;
