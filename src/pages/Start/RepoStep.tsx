import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { getReposSaga } from 'store/repo/action';
import { Link } from 'react-router-dom';
import { RepoItem, EmptySection, Loading } from 'components';
import { APP_NAME } from 'constants/github';
import profileImg from 'assets/img/TemporaryProfileImg.png';

import styles from 'scss/pages/RepoStep.module.scss';

const RepoStep = () => {
  const [searchWord, setSearchWord] = useState('');
  const username = useSelector((state: StoreState) => state.auth.user.name);
  const repos = useSelector((state: StoreState) => state.repo.repos);
  const repoResults = useMemo(
    () => repos.filter(({ name }) => name.match(searchWord)),
    [repos, searchWord],
  );
  const isFetching = useSelector(
    (state: StoreState) => state.repo.getReposStatus === 'FETCHING',
  );
  const isEmpty = !isFetching && repoResults.length === 0;
  const dispatch = useDispatch();

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

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
          <input
            className={styles.input}
            placeholder="Search Repo"
            value={searchWord}
            onChange={handleSearchWordChange}
          />
        </div>
      </div>
      <div className={styles.repoListBody}>
        {isFetching && <Loading />}
        {isEmpty && <EmptySection message="등록된 Repository가 없어요." />}
        {repoResults.map(repo => (
          <RepoItem key={repo.id} {...repo} />
        ))}
      </div>
      <div className={styles.repoListFooter}>
        <Link
          className={styles.repoAddLink}
          to={`https://github.com/apps/${APP_NAME}/installations/new`}
        >
          Add Repository
        </Link>
      </div>
    </div>
  );
};

export default RepoStep;
