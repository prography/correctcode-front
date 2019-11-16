import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReposSaga } from 'store/repo/action';
import { RepoItem } from 'components';
import { APP_NAME } from 'constants/github';

const RepoStep = () => {
  const repos = useSelector((state: StoreState) => state.repo.repos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReposSaga());
  }, [dispatch]);

  return (
    <div>
      <h3>내 레포목록</h3>
      <div>
        {repos.map(repo => (
          <RepoItem key={repo.id} {...repo} />
        ))}
      </div>
      <a href={`https://github.com/apps/${APP_NAME}/installations/new`}>
        레포 추가
      </a>
    </div>
  );
};

export default RepoStep;
