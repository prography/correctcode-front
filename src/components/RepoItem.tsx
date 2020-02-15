import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Repo } from 'models/repo';
import { FaAngleRight, FaGithubSquare } from 'react-icons/fa';

// `/start/review/${id}`;
const RepoItem: FC<Repo> = ({ id, name }) => {
  const history = useHistory();
  const [ownername, reponame] = name.split('/');
  const handleClick = () => history.push(`/start/review/${id}`);

  return (
    <div
      className="flex items-center w-full px-2 py-6 border-b border-gray-200 cursor-pointer"
      onClick={handleClick}
    >
      <FaGithubSquare className="w-8 h-8" />
      <div className="flex-1 ml-3">
        <div className="text-gray-500 text-sm">{ownername}</div>
        <div className="font-bold">{reponame}</div>
      </div>
      <div>
        <FaAngleRight className="w-5" />
      </div>
    </div>
  );
};

export default RepoItem;
