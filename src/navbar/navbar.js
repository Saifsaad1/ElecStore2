import React, { useState } from "react";
import logo from './images/logo.png';
import "./css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar" className={isOpen ? "change" : ""}>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="line line-1"></div>
        <div className="line line-2"></div>
        <div className="line line-3"></div>
      </div>

      <div className="navbar-container">
        <div className="nav-part-1">
          <a href="">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>

        <div className="nav-part-2">
          <ul>
            <li className="li"><a href="" className="li-1">Home</a></li>
            <li className="li"><a href="#arrivals">New Arrivals</a></li>
            <li className="li"><a href="#products">Products</a></li>
            <li className="li"><a href="#sales">Sales</a></li>
            <li className="li"><a href="#about">About Us</a></li>
            <li className="li li-6"><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
