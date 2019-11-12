import React from 'react';
import profileImg from 'assets/img/TemporaryProfileImg.png';
import styles from 'scss/components/SideBar.module.scss';
const SideBar = () => {
  return (
    <div className={styles.SideBarBox}>
      <img src={profileImg} />
      <p className={styles.name}>name</p>
      <p className={styles.description}>descriptrion</p>
    </div>
  );
};

export default SideBar;
