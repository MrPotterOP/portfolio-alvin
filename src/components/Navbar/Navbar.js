import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <HashLink className='nav-logo' to="#hero">Alvin <br/> Lucien</HashLink>
      <div className="menu-container">
        <button className="menu-button" onClick={toggleMenu}>
          <img src="/images/menu.png" alt="Menu" />
        </button>
        <div className={`menu-links ${isMenuOpen ? 'active-menu' : ''}`}>
          <HashLink to="#hero" onClick={closeMenu} >Home</HashLink>
          <HashLink to="#about" onClick={closeMenu} >About</HashLink>
          <HashLink to="#services" onClick={closeMenu} >Services</HashLink>
          <HashLink to="#work" onClick={closeMenu} >Work</HashLink>
          <HashLink to="#contact" onClick={closeMenu} >Contact</HashLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
