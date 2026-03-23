import { NavLink } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          MySite
        </div>

        <ul className="footer-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>

        <p className="footer-copy">
          © 2026 MySite. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;