import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';
import logo from "../../../assets/icons/logo.jfif"
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.section}>
          <div className={style.logo}>
            <img src= {logo} alt="logo image" />
            <h1>Alpha Academy</h1>
          </div>
          <p>
            Full Stack Developer sharing modern programming and academic technology skills through
            practical learning and real-world projects.
          </p>
        </div>

        <div className={style.section}>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/service">Services</Link>
            </li>

            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={style.section}>
          <h3>Contact</h3>
          <p>Email: dawittadesse56@gmail.com</p>
          <p>Phone: +251 963 860 446</p>
          <p>Ethiopia</p>
        </div>

        <div className={style.section}>
          <h3>Follow Us</h3>

          <div className={style.socials}>
            <a href="/">Facebook</a>
            <a href="/">YouTube</a>
            <a href="/">Linkdin</a>
            <a href="/">GitHub</a>
          </div>
        </div>
      </div>

      <div className={style.bottom}>
        <p>© 2026 Alpha Academy. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
