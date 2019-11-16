import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Repo } from 'models/repo';

const RepoItem: FC<Repo> = ({ id, name }) => {
  return (
    <Link to={`/start/review/${id}`}>
      id: {id} <br /> name: {name}
    </Link>
  );
};

export default RepoItem;
