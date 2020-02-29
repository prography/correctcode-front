import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from 'assets/img/logo_2line.png';
import githubLogo from 'assets/img/GitHubMark.png';
import backgroundLogo from 'assets/img/backgroundLogo.png';
import styles from 'scss/pages/Home.module.scss';
import { Redirection } from 'components';
import { showToast } from 'store/toast/action';
import useLocationSearch from 'hooks/useLocationSearch';

const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const { redirectUrl } = useLocationSearch();

  useEffect(() => {
    if (!isLoggedIn && redirectUrl) {
      dispatch(showToast({ message: '먼저 로그인을 해주세요!' }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Redirection shouldRedirect={isLoggedIn}>
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
    </Redirection>
  );
};

export default Home;
