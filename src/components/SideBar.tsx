import React from 'react';
import { useSelector } from 'react-redux';
import profileImg from 'assets/img/TemporaryProfileImg.png';
import styles from 'scss/components/SideBar.module.scss';

type Props = {
  isFetching: boolean;
};

const SideBar: React.FC<Props> = ({ isFetching }) => {
  const user = useSelector((state: StoreState) => state.auth.user);
  return (
    <div className={styles.SideBarBox}>
      {isFetching ? (
        <>
          <div className={styles.fetchingImg} />
          <div className={styles.fetchingName} />
          <div className={styles.fetchingDescription} />
        </>
      ) : (
        <>
          <img
            src={user.profileImg ? user.profileImg : profileImg}
            alt="profile"
          />
          <p className={styles.name}>{user.displayName}</p>
          <p className={styles.description}>{user.email}</p>
        </>
      )}
    </div>
  );
};

export default SideBar;
