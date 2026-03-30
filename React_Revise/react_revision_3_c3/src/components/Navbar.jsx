

import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>

      <ul className="navbar-links">
        <li><a href="../pages/Home.jsx">Home</a></li>
        <li><a href="../pages/Contact.jsx">Contact</a></li>
        <li><a href="../pages/About.jsx">About</a></li>
      </ul>

      <button className="navbar-btn">Login</button>
    </nav>
  );
}

export default Navbar;