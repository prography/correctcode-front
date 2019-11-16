import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { getReposSaga } from 'store/repo/action';
import { RepoItem } from 'components';
import { APP_NAME } from 'constants/github';
import profileImg from 'assets/img/TemporaryProfileImg.png';

import styles from 'scss/RepoStep.module.scss';

const RepoStep = () => {
  const username = useSelector((state: StoreState) => state.auth.user.name);
  const repos = useSelector((state: StoreState) => state.repo.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReposSaga());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.repoListHeader}>
        <div className={styles.profile}>
          <img src={profileImg} alt="profile" className={styles.img} />
          <span className={styles.name}>{username}</span>
        </div>
        <div className={styles.search}>
          <i className={classnames('fas fa-search', styles.icon)}></i>
          <input className={styles.input} placeholder="Search Repo" />
        </div>
      </div>
      <div className={styles.repoListBody}>
        {repos.map(repo => (
          <RepoItem key={repo.id} {...repo} />
        ))}
      </div>
      <div className={styles.repoListFooter}>
        <a
          className={styles.repoAddLink}
          href={`https://github.com/apps/${APP_NAME}/installations/new`}
        >
          Add Repository
        </a>
      </div>
    </div>
  );
};

export default RepoStep;