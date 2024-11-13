import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyBrand</Link>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/faqs'>FAQs</Link></li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default NavBar;
