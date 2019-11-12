import React from 'react';
import styles from 'scss/components/Nav.module.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';
const Nav = () => {
  return (
    <div className={styles.NavBox}>
      <img src={logo} className={styles.logo} />
      <div className={styles.profile}>
        <img src={profileImg} className={styles.profileImg} />
        <p>George</p>
      </div>
    </div>
  );
};

export default Nav;
