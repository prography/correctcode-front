import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from 'scss/Home.module.scss';
import logo from 'assets/img/logo_2line.png';
import githubLogo from 'assets/img/GitHubMark.png';
import backgroundLogo from 'assets/img/backgroundLogo.png';

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const authStatus = useSelector((state: StoreState) => state.auth.meStatus);
  const email = useSelector((state: StoreState) => state.auth.user.email);

  if (authStatus === 'INIT' || authStatus === 'FETCHING') {
    return null;
  }
  if (!isLoggedIn) {
    return <a href="/api/auth/github">github login</a>;
  }
  return (
    <div className={styles.homeBody}>
      <div className={styles.centerDiv}>
        <img src={logo} className={styles.homeLogo} />
        <p className={styles.homeSlogan}>
          당신의 코드를 완벽하게! <br />
          지금 바로 코드 리뷰를 받아보세요
        </p>
        <div className={styles.bottomDivs}>
          <a href="/api/auth/github" className={styles.signInAnchor}>
            <div className={styles.signIn}>
              <img src={githubLogo} className={styles.githubLogo} />
              <p>Sign-in with Github</p>
            </div>
          </a>
          <img src={backgroundLogo} className={styles.backgroundLogo} />
        </div>
      </div>
      <div>
        <h1>hello! {email}</h1>
        <Link to="/start/repo">레포 만들기</Link>
      </div>
    </div>
  );
};

export default Home;
