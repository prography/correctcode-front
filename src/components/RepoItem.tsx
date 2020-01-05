import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Repo } from 'models/repo';
import { FaAngleRight, FaGithubSquare } from 'react-icons/fa';

import styles from 'scss/components/RepoItem.module.scss';
// `/start/review/${id}`;
const RepoItem: FC<Repo> = ({ id, name }) => {
  const history = useHistory();
  const [ownername, reponame] = name.split('/');
  const handleClick = () => history.push(`/start/review/${id}`);

  return (
    <div className={styles.container} onClick={handleClick}>
      <FaGithubSquare className={styles.githubIcon} />
      <div className={styles.info}>
        <span className={styles.ownername}>{ownername}</span>
        <span className={styles.reponame}>/{reponame}</span>
      </div>
      <div className={styles.action}>
        <FaAngleRight className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default RepoItem;
