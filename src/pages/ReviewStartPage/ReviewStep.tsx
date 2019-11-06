import React, { memo } from 'react';
import { Repo } from 'models/repo';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

type Props = {
  repo: Repo;
};
const ReviewStep: React.FC<Props> = () => {
  const { repoId } = useParams();
  const currentRepo = useSelector((state: StoreState) =>
    state.repo.repos.find(({ id }) => String(id) === repoId),
  );
  if (!currentRepo) {
    return null;
  }
  return (
    <div>
      <div>선택된 레포 : {currentRepo.fullName}</div>
    </div>
  );
};

export default memo(ReviewStep);
