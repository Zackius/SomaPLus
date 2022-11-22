import React, {useState} from "react";
import { logo } from "../../assests/";
import { Link } from "react-router-dom";
import{FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    return (
    //   Web Navbar
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
            {/* Closing and Opening in mobile navbar */}
            <div onClick={handleClick} className=" md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
            {/* Mobile Navbar */}
            <div
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#6be7d9] flex flex-col  justify-center items-center"
        }
      >
        <ul>
        <li className="py-6 text-4xl">
          <Link to="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work">
            Work
          </Link>
          </li>
          <li className="py-6 text-4xl">
          <Link to="/">
            Blog
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact">
            Contact
          </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
