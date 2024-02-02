import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <nav className="px-8 py-6 bg-balck flex flex-row items-center justify-between bg-black">
      <Link to="/">
        <img src={logo} alt="logo_img" className="w-full h-ful" />
      </Link>
      <div className="">
        <NavList />
      </div>
    </nav>
  );
};

export default Navbar;
