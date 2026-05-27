import React from 'react';
import styles from './Topbar.module.css';
import admin_logo from '../../../../assets/images/admin.jfif';

function Topbar() {
  return (
    <div className={styles.topbar}>

      <div className={styles.left}>
        <h2>Dashboard</h2>
      </div>

      <div className={styles.right}>

        <div className={styles.profile}>
          <img className={styles.admin_logo} src={admin_logo} alt="admin_logo" />
          <span>Dawit</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
