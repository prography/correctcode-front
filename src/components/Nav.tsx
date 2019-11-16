import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from 'scss/components/Nav.module.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';

const Nav = () => {
  const location = useLocation();
  return (
    <div className={styles.NavBox}>
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <img src={logo} className={styles.logo} />
        </div>
        <div className={styles.profile}>
          <img src={profileImg} className={styles.profileImg} />
          <p>George</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
