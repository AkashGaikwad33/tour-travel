import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineModeOfTravel } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //function to taggle navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };
  //function to remove  navbar
  const removeNavbar = () => {
    setActive("navBar ");
  };

  return (
    <>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href=" # " className="logo flex">
              <h1>
                <MdOutlineModeOfTravel className="icons" /> AG Travel
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLists flex">
              <li className="navItem">
                <a href="#" className="navLink">
                  Home
                </a>
              </li>

              <li className="navItem">
                <a href="#" className="navLink">
                  Package
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Shop
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  About
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Pages
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Blog
                </a>
              </li>
              <li className="navItem">
                <a href="#" className="navLink">
                  Contact
                </a>
              </li>
              <button className="btn">
                <a href="#">Book Now</a>
              </button>
            </ul>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>
          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </>
  );
};

export default Navbar;
