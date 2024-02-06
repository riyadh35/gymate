import React from "react";
import { Link } from "react-router-dom";

const NavList = () => {
  const goTop = () => {
    window.screenTop({
      top: 0,
      behavior: "none",
    });
  };
  return (
    <>
      <ul className="flex text-white gap-7 font-medium capitalize xl">
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/gallery">Gallery</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/schedule">Schedule</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/blog">Blog</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/picing">Picing</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/classes">Classes</Link>
        </li>
        <li
          className="cursor-pointer hover:text-[#ff0336]"
          style={{ transition: "all 0.4s" }}
        >
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
