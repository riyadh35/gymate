import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.svg";
import logoSide from "../../assets/logo/logo-footer.svg";
import NavList from "./NavList";
import { useState } from "react";
import { FaPlus, FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [spin, setSpin] = useState(false);

  const joinSpin = () => {
    setSpin(true);
  };
  const stopSpin = () => {
    setSpin(false);
  };

  // navbar sticky

  const handleScrll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  window.addEventListener("scroll", handleScrll);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav
      className={`px-8 py-6 bg-balck flex flex-row items-center justify-between bg-black bg-transparent fixed top-0 left-0 right-0 z-50 ${
        sticky ? "shadow-xl !bg-black " : ""
      }`}
    >
      <Link to="/">
        <img
          src={logo}
          onClick={goTop}
          alt="logo_img"
          className="w-full h-ful"
        />
      </Link>
      <div className="navlist-menu">
        <NavList />
      </div>
      <div className="flex items-center gap-10">
        {/* icon toggleMenu / sidebar / spin + contact page */}
        {/* sign up icon */}
        <FaRegUser
          onClick={goTop}
          to="/signup"
          title="signup_button"
          className="text-white text-[20px] cursor-pointer hover:text-[#ff0336] ease-in duration-200"
        />
        {/* spin Box */}
        {/* <div className="border-[rgb(255,255,255,0.3)] border-solid border-2 p-2 rounded-md ">
          <Link
            onClick={goTop}
            to="/contact"
            onMouseEnter={joinSpin}
            onMouseLeave={stopSpin}
            className="flex items-center"
          >
            <FaPlus
              className={`bg-[#ff0336] text-white text-3xl py-1.5 px-2 rounded-md ${
                spin ? "nav-btn-hover" : ""
              }`}
            />
            <h3 className="text-white text-[14px] font-bold uppercase ml-4 mr-8 tracking-wider">
              join class now
            </h3>
          </Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
