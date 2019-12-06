import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from 'scss/pages/Home.module.scss';
import logo from 'assets/img/logo_2line.png';
import githubLogo from 'assets/img/GitHubMark.png';
import backgroundLogo from 'assets/img/backgroundLogo.png';

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const authStatus = useSelector((state: StoreState) => state.auth.meStatus);

  if (authStatus === 'INIT' || authStatus === 'FETCHING') {
    return null;
  }
  if (!isLoggedIn) {
    return <a href="/api/auth/github">github login</a>;
  }
  return (
    <div className={styles.homeBody}>
      <div className={styles.centerDiv}>
        <img src={logo} className={styles.homeLogo} alt="home logo" />
        <p className={styles.homeSlogan}>
          당신의 코드를 완벽하게! <br />
          지금 바로 코드 리뷰를 받아보세요
        </p>
        <div className={styles.bottomDivs}>
          <a href="/api/auth/github" className={styles.signInAnchor}>
            <div className={styles.signIn}>
              <img
                src={githubLogo}
                className={styles.githubLogo}
                alt="github logo"
              />
              <p>Sign-in with Github</p>
            </div>

            <Link
              style={{
                float: 'right',
                fontSize: 24,
                color: 'white',
                textDecoration: 'none',
                marginRight: 20,
              }}
              to="/start/repo"
            >
              레포 만들기 테스트 링크 ^^
            </Link>
          </a>
          <img
            src={backgroundLogo}
            className={styles.backgroundLogo}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
