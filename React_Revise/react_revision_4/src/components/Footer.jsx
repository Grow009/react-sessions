import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-logo">
          <h2>MyApp</h2>
          <p>Your trusted platform</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
          
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;