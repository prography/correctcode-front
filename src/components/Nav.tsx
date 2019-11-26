import React from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Nav.module.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';

type Props = {
  isStartPage?: boolean;
};

const Nav: React.FC<Props> = ({ isStartPage = false }) => {
  return (
    <div
      className={classnames(styles.NavBox, {
        [styles.isStartPage]: isStartPage,
      })}
    >
      <div className={styles.innerBox}>
        <div className={styles.left}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.profile}>
          <img src={profileImg} className={styles.profileImg} alt="profile" />
          <span>George</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
