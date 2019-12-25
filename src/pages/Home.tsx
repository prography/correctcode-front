import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import logo from 'assets/img/logo_2line.png';
import githubLogo from 'assets/img/GitHubMark.png';
import backgroundLogo from 'assets/img/backgroundLogo.png';
import styles from 'scss/pages/Home.module.scss';

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );

  if (isLoggedIn) {
    return <Redirect to="/reviewee" />;
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
          <a
            href={isLoggedIn ? '/reviewee' : '/api/auth/github'}
            className={styles.signInAnchor}
          >
            <div className={styles.signIn}>
              <img
                src={githubLogo}
                className={styles.githubLogo}
                alt="github logo"
              />
              <p>Sign-in with Github</p>
            </div>
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
