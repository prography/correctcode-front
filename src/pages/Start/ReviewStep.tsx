import React, { memo } from 'react';
import { Repo } from 'models/repo';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import GithubIcon from 'assets/img/GitHubMark.png';

import styles from 'scss/ReviewStep.module.scss';

type Props = {
  repo: Repo;
};
const ReviewStep: React.FC<Props> = () => {
  const { repoId } = useParams();
  const currentRepo = useSelector((state: StoreState) =>
    state.repo.repos.find(({ id }) => String(id) === repoId),
  );
  // if (!currentRepo) {
  //   return null;
  // }
  const { name = 'aa/ff' } = currentRepo || ({} as any);
  const [ownername, reponame] = name.split('/');
  return (
    <div className={styles.container}>
      <div className={styles.repoInfo}>
        <img src={GithubIcon} alt="github" className={styles.githubIcon} />
        <div className={styles.info}>
          <span className={styles.ownername}>{ownername}</span>
          <span className={styles.reponame}>/{reponame}</span>
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <span className={styles.description}>리뷰어에게 보내는 메세지</span>
          </div>
          <div className={styles.formItem}>브랜치를 선택해주세요.</div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <textarea
              className={styles.message}
              placeholder="최대 100자까지 입력 가능합니다."
            />
          </div>
          <div className={styles.formCol}>
            <div className={styles.formItem}>태그를 선택해주세요.</div>
            <button className={styles.button}>등록 완료하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewStep);
