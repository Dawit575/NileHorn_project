import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from "../../Admin/Dashboard/Sidebar/Sidebar.jsx";
import Topbar from "../../Admin/Dashboard/Topbar/Topbar.jsx";
import styles from "./Dashboard_layout.module.css";
function Dashboard_layout() {
  return (
    <div className={styles.dashboard}>
        <Sidebar/>
        <div className={styles.content}>
          <Topbar/>
          <main className={styles.main}>
            <Outlet/>
          </main>
        </div>
    </div>
  )
}

export default Dashboard_layout
