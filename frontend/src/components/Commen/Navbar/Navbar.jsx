import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import logo from '../../../assets/icons/logo.jfif';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <div className={style.logo}>
          <img src={logo} alt="Logo" />
          <h1>Alpha</h1>
        </div>

        <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>

      <ul className={`${style.navLinks} ${menuOpen ? style.active : ''}`}>
        <li>
          <Link
            to="/"
            onClick={() => setActive('home')}
            className={`${style.link} ${active === 'home' ? style.activeLink : ''}`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            onClick={() => setActive('about')}
            className={`${style.link} ${active === 'about' ? style.activeLink : ''}`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/portfolio"
            onClick={() => setActive('portfolio')}
            className={`${style.link} ${active === 'portfolio' ? style.activeLink : ''}`}
          >
            Portfolio
          </Link>
        </li>

        <li>
          <Link
            to="/service"
            onClick={() => setActive('service')}
            className={`${style.link} ${active === 'service' ? style.activeLink : ''}`}
          >
            Services
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            onClick={() => setActive('contact')}
            className={`${style.link} ${active === 'contact' ? style.activeLink : ''}`}
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            onClick={() => setActive('loginBtn')}
            className={`${style.link} ${style.loginBtn} ${
              active === 'loginBtn' ? style.activeLogin : ''
            }`}
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
