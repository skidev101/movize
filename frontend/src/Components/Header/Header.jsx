import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <a href="/" className="logo-link">
            <img src="/movize.png" alt="Movize logo" className="logo-image" />
          </a>
        </div>
        <button
          className="menu-toggle"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          <i className={`fa-solid fa-${menuOpen ? "xmark" : "bars"}`}></i>
        </button>
        <nav
          className={`header-nav ${menuOpen ? " open" : ""}`}
          onClick={handleClose}
        >
          <ul className="header-list">
            <li className="header-item">
              <a href="/">Home</a>
            </li>
            <li className="header-item">
              <a href="/search">Search</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
