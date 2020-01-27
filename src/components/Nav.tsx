import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from 'scss/components/Nav.module.scss';
import logo from 'assets/img/logo.png';
import profileImg from 'assets/img/TemporaryProfileImg.png';

type Props = {
  isStartPage?: boolean;
  isReviewer?: boolean;
};

const Nav: React.FC<Props> = ({ isStartPage = false, isReviewer }) => {
  const user = useSelector((state: StoreState) => state.auth.user);
  const logoToReviewerDash = isReviewer ? '/reviewer' : '/reviewee';

  return (
    <div
      className={classnames(styles.NavBox, {
        [styles.isStartPage]: isStartPage,
      })}
    >
      <div className={styles.innerBox}>
        <Link className={styles.left} to={logoToReviewerDash}>
          <img src={logo} className={styles.logo} alt="logo" />
        </Link>
        <div className={styles.profile}>
          <div
            className={classnames(styles.contact, {
              [styles.startpageContact]: isStartPage,
            })}
          >
            <a href="https://forms.gle/n8poWfpe1wLhrWQ26" target="blank">
              CONTACT
            </a>
          </div>
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
