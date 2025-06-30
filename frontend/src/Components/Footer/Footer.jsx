import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} Movize. All rights reserved.
      </p>
      <p className="footer__text">
        Made with <span role="img" aria-label="love">💣</span> by Ethan
      </p>
    </div>
  </footer>
);

export default Footer;
