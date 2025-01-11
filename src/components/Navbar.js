import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.PNG";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="navbar-image" />
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/experience">Experience</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/recommendations">Recommendations</Link>    
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
