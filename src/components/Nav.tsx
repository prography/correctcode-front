import React from 'react';
import { useSelector } from 'react-redux';

import classnames from 'classnames';
import styles from 'scss/components/Nav.module.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';

type Props = {
  isStartPage?: boolean;
};

const Nav: React.FC<Props> = ({ isStartPage = false }) => {
  const user = useSelector((state: StoreState) => state.auth.user);
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
          <img
            src={user.profileImg ? user.profileImg : profileImg}
            className={styles.profileImg}
            alt="profile"
          />
          <span>{user.displayName}</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
