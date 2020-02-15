import React, { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRepos } from 'store/repo/action';
import {
  RepoItem,
  EmptySection,
  PlaceHolder,
  Button,
  RepoPlaceHolder,
} from 'components';
import { APP_NAME } from 'constants/github';
import { FaSearch } from 'react-icons/fa';
import profileImg from 'assets/img/TemporaryProfileImg.png';

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
    <div>
      <div className="flex justify-between">
        <div className="flex items-center bg-gray-200 p-2 rounded">
          <img src={profileImg} alt="profile" className="w-8 h-8" />
          <span className="ml-2 font-bold">{username}</span>
        </div>
        <div className="flex items-center p-2 border border-gray-400 rounded">
          <FaSearch className="text-gray-400" />
          <input
            className="ml-2 outline-none"
            placeholder="Search Repo"
            value={searchWord}
            onChange={handleSearchWordChange}
          />
        </div>
      </div>
      <div className="mt-2 mb-2 h-64 overflow-auto">
        <PlaceHolder placeHolder={<RepoPlaceHolder />}>
          {isItemReady &&
            (isEmpty ? (
              <EmptySection
                message={
                  <>
                    등록된 Repository가 없어요.
                    <div className="w-full mt-6 text-center">
                      <Button
                        href={`https://github.com/apps/${APP_NAME}/installations/new`}
                      >
                        Repository 추가
                      </Button>
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
        <Button href={`https://github.com/apps/${APP_NAME}/installations/new`}>
          Repository 추가
        </Button>
      </div>
    </div>
  );
};

export default RepoStep;
