import React from 'react'
import styles from "./Sidebar.module.css";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.title}>Admin</h1>
      <div className= {styles.admin_sidebar}>
          <button className= {styles.admin_dashboard_link} to="/admin">Dashboard</button>
          <Link to= '/' className={styles.logout_btn}>Logout</Link>
      </div>
    </div>
  );
}

export default Sidebar;
