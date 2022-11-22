import React from "react";
import { logo } from "../../assests/";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex  justify-evenly  items-center  px-4  bg-[#6be7d9]">
      <div>
        <img
          className="w-48 h-[50px]"
          src={`${logo}`}
          alt="logo"
        />
      </div>

      <ul className="hidden md:flex">
        <li className="hover:scale-110 px-6">
          <Link to="home" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="hover:scale-110 px-6">
          <Link to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="hover:scale-110 px-6">
          <Link to="skills" smooth={true} duration={300}>
            Skills
          </Link>
        </li>
        <li className="hover:scale-110 px-6">
          <Link to="work" smooth={true} duration={300}>
            Work
          </Link>
        </li>
        <li className="hover:scale-110 px-6">
          <Link to="/" smooth={true} duration={300}>
            Blog
          </Link>
        </li>
        <li className="hover:scale-110 px-6">
          <Link to="contact" smooth={true} duration={300}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
