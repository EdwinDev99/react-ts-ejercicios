import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="flex justify-between p-5 bg-amber-50 w-full fixed ">
      <Link to={"/"}>MAISON</Link>
      <Link to="/Home">HOME</Link>
      <Link to={"Store"}>STORE</Link>
      <FiShoppingBag size={20} />
    </header>
  );
}

export default Navbar;
