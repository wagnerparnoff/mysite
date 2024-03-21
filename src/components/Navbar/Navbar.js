import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-container">
        <div>
          <a href="/" className="navbar-logo">
            Wagner-Parnoff
          </a>
        </div>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/">_hello</a>
            </li>
            <li>
              <a href="/about">_about-me</a>
            </li>
            <li>
              <a href="/projects">_projects</a>
            </li>
            <li>
              <a href="/contact">_contact-me</a>
            </li>
          </ul>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {isOpen ? <span>&times;</span> : <span>&#9776;</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
