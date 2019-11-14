import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReposSaga } from 'store/repo/action';
import { RepoItem } from 'components';

const RepoStep = () => {
  const repos = useSelector((state: StoreState) => state.repo.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReposSaga());
  }, [dispatch]);

  return (
    <div>
      <h3>내 레포목록</h3>
      {repos.map(repo => (
        <RepoItem key={repo.id} {...repo} />
      ))}
      <a href="https://github.com/apps/correct-code/installations/new">레포 추가</a>
    </div>
  );
};

export default RepoStep;
