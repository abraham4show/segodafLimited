import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/segodaf-logo2.png";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Segodaf Limited" />
      </div>

      {/* Desktop Links */}
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/properties">Properties</a></li>
        <li><a href="/contact">Contact</a></li>
`        <li><a href="/Construction">Construction</a></li>
`</ul>
      
{/* ============ */}
  <header className="header">
    <div className="container">
      
      <div className="contact-info">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
        </div>
      </div>
    </div>
  </header>

  
      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          <li><a href="/" onClick={toggleMenu}>Home</a></li>
          <li><a href="/about" onClick={toggleMenu}>About</a></li>
          <li><a href="/services" onClick={toggleMenu}>Services</a></li>
          <li><a href="/properties" onClick={toggleMenu}>Properties</a></li>
          <li><a href="/contact" onClick={toggleMenu}>Contact</a></li>
          <li><a href="/Construction" onClick={toggleMenu}  >Construction</a></li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
