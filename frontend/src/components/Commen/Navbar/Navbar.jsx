import React, { useState } from 'react'
import {Link} from "react-router-dom";
import style from "./Navbar.module.css";
import logo from "../../../assets/icons/logo.jfif";

function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false);
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} alt="Logo image" />
        <h1>Alpha</h1>
      </div>

      <ul className={`${style.navLinks} ${menuOpen} ? style.active : ""`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </li>
      </ul>

      <div className={style.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </div>
  );
}

export default Navbar
  