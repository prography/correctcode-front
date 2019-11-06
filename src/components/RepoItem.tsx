import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Repo } from 'models/repo';

const RepoItem: FC<Repo> = ({ id, fullName }) => {
  return (
    <Link to={`/start/review/${id}`}>
      id: {id} <br /> fullName: {fullName}
    </Link>
  );
};

export default RepoItem;
