import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepos } from 'store/repo/action';
import { RepoItem, EmptySection, PlaceHolder } from 'components';
import { APP_NAME } from 'constants/github';
import { FaSearch } from 'react-icons/fa';
import profileImg from 'assets/img/TemporaryProfileImg.png';

import styles from 'scss/pages/RepoStep.module.scss';
import FetchingRepo from 'components/FetchingRepo';

const AddRepoButton = () => (
  <a
    className="bg-primary hover:bg-primaryTwo text-white font-bold py-2 px-4 rounded"
    href={`https://github.com/apps/${APP_NAME}/installations/new`}
  >
    Repository 추가
  </a>
);

const RepoStep = () => {
  const [searchWord, setSearchWord] = useState('');
  const username = useSelector((state: StoreState) => state.auth.user.name);
  const repos = useSelector((state: StoreState) => state.repo.items);
  const repoResults = useMemo(
    () => repos.filter(({ name }) => name.match(searchWord)),
    [repos, searchWord],
  );
  const status = useSelector((state: StoreState) => state.repo.status);
  const isItemReady = status === 'SUCCESS' || repos.length !== 0;
  const isEmpty = isItemReady && repoResults.length === 0;
  const dispatch = useDispatch();

  const handleSearchWordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchWord(e.target.value);

  useEffect(() => {
    dispatch(getRepos());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.repoListHeader}>
        <div className={styles.profile}>
          <img src={profileImg} alt="profile" className={styles.img} />
          <span className={styles.name}>{username}</span>
        </div>
        <div className={styles.search}>
          <FaSearch className={styles.icon} />
          <input
            className={styles.input}
            placeholder="Search Repo"
            value={searchWord}
            onChange={handleSearchWordChange}
          />
        </div>
      </div>
      <div className="mt-2 mb-2 h-64 overflow-auto">
        <PlaceHolder placeHolder={<FetchingRepo />}>
          {isItemReady &&
            (isEmpty ? (
              <EmptySection
                message={
                  <>
                    등록된 Repository가 없어요.
                    <div className="w-full mt-6 text-center">
                      <AddRepoButton />
                    </div>
                  </>
                }
              />
            ) : (
              repoResults.map(repo => <RepoItem key={repo.id} {...repo} />)
            ))}
        </PlaceHolder>
      </div>
      <div className="w-full mt-6 text-right">
        <AddRepoButton />
      </div>
    </div>
  );
};

export default RepoStep;
