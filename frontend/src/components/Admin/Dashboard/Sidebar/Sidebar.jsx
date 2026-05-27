import React, { useState } from 'react'
import styles from "./Sidebar.module.css";
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from "../../../../contexts/Auth_context.jsx"
function Sidebar() {
  const [menuOpen,setMenuOpen] = useState(false);
  const {logout} =useAuth();

  const handleChange = () => {
    logout();
  }
  return (
    <div className={`${styles.sidebar} ${menuOpen ? styles.activeSidebar : ''}`}>

      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <h1 className={styles.title}>Admin</h1>

      <div className={styles.admin_sidebar}>
        <button className={styles.admin_dashboard_link} to="/admin">
          Dashboard
        </button>
        <Link to="/" className={styles.logout_btn} onClick={handleChange}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
