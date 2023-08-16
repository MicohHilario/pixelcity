import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Headroom from "react-headroom";

const NAVBAR = () => {
  return (
    <nav className="gap-10 xl:flex-row flex flex-col  ">
      <NavLink
        className="drop-shadow-md font-normal font-poppins after:w-56 after:block after:content-[''] after:absolute after:h-[1px] after:bg-cyan-600 xl:after:w-[2.9rem] after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
        to="/"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#454545" : "",
          };
        }}
      >
        HOME
      </NavLink>
      <NavLink
        className="drop-shadow-md font-normal font-poppins after:w-56 after:block after:content-[''] after:absolute after:h-[1px] after:bg-cyan-600 xl:after:w-[4.8rem]  after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
        to="/about"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#454545" : "",
          };
        }}
      >
        ABOUT US
      </NavLink>
      <NavLink
        className="drop-shadow-md font-normal font-poppins after:w-56 after:block after:content-[''] after:absolute after:h-[1px] after:bg-cyan-600 xl:after:w-[5.3rem]  after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
        to="/portfolio"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#454545" : "",
          };
        }}
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        className="drop-shadow-md font-normal font-poppins after:w-56 after:block after:content-[''] after:absolute after:h-[1px] after:bg-cyan-600 xl:after:w-[6.3rem]  after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left "
        to="/contact"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#454545" : "",
          };
        }}
      >
        CONTACT US
      </NavLink>
    </nav>
  );
};

const Navigation = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <Headroom>
      <div className="z-50 bg-cyan-950 bg-opacity-90 border-b-[1px] border-cyan-600 flex h-[10vh] w-[100vw] sm:h-[5rem]">
        <div className="logo flex-1  pl-2 pt-4 lg:p-[1rem]">
          <a
            href="/"
            className=" cursor-pointer text-3xl font-bold font-poppins after:w-56 text-white sm:text-4xl drop-shadow-md "
          >
            pixelcity
          </a>
        </div>

        <FontAwesomeIcon
          onClick={handleClick}
          className="absolute right-[2rem] top-[1.5rem] text-2xl text-white xl:hidden"
          icon={faBars}
        />

        <nav className="navbar text-white h-[2rem] relative top-7 right-[4rem] hidden items-center justify-center  text-center xl:flex xl:w-[35rem]">
          <NAVBAR />
        </nav>

        <nav
          style={{ top: toggle ? "-15rem" : "5rem" }}
          className="border-l-[1px] border-cyan-600 navbar xl:hidden relative items-center justify-center h-[15rem] p-3 bg-white w-[50vw] text-center xl:w-[35rem] transition-all duration-100 ease-in"
        >
          <NAVBAR />
        </nav>
      </div>
    </Headroom>
  );
};

export default Navigation;
