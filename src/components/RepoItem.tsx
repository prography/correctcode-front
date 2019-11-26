import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { Repo } from 'models/repo';
import GithubIcon from 'assets/img/GitHubMark.png';

import styles from 'scss/components/RepoItem.module.scss';
// `/start/review/${id}`;
const RepoItem: FC<Repo> = ({ id, name }) => {
  const history = useHistory();
  const [ownername, reponame] = name.split('/');
  const handleClick = () => history.push(`/start/review/${id}`);
  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={GithubIcon} alt="github" className={styles.githubIcon} />
      <div className={styles.info}>
        <span className={styles.ownername}>{ownername}</span>
        <span className={styles.reponame}>/{reponame}</span>
      </div>
      <div className={styles.action}>
        <i className={classnames('fas fa-chevron-right', styles.arrowIcon)}></i>
      </div>
    </div>
  );
};

export default RepoItem;
