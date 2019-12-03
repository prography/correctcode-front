import React from 'react';
import { useSelector } from 'react-redux';
import profileImg from 'assets/img/TemporaryProfileImg.png';
import styles from 'scss/components/SideBar.module.scss';

const SideBar = () => {
  const user = useSelector((state: StoreState) => state.auth.user);
  return (
    <div className={styles.SideBarBox}>
      <img src={user.profileImg ? user.profileImg : profileImg} alt="profile" />
      <p className={styles.name}>{user.displayName}</p>
      <p className={styles.description}>{user.email}</p>
    </div>
  );
};

export default SideBar;
