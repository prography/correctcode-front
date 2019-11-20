import React, { memo, useState, useMemo } from 'react';
import { Repo } from 'models/repo';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Dropdown } from 'components';
import GithubIcon from 'assets/img/GitHubMark.png';
import useFetch from 'hooks/useFetch';
import { getBranches } from 'api/repo';

import styles from 'scss/ReviewStep.module.scss';

type Props = {
  repo: Repo;
};

const MOCK_BRANCH = [
  {
    value: 'master',
    text: 'master',
  },
  {
    value: 'develop',
    text: 'develop',
  },
];

const MOCK_TAG = [
  {
    value: 'javascript',
    text: 'javascript',
  },
  {
    value: 'typescript',
    text: 'typescript',
  },
];

const ReviewStep: React.FC<Props> = () => {
  const { repoId } = useParams();
  const [branch, setBranch] = useState('');
  const [tag, setTag] = useState('');
  const [message, setMessage] = useState('');
  const currentRepo = useSelector((state: StoreState) =>
    state.repo.repos.find(({ id }) => String(id) === repoId),
  );

  const isButtonActive = message && branch && tag;
  const { name = 'aa/ff' } = currentRepo || ({} as any);
  const [ownername, reponame] = name.split('/');

  const onBranchSelect = (branch: string) => setBranch(branch);
  const onTagSelect = (tag: string) => setTag(tag);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  // branch 패칭
  const { state: branchState } = useFetch(getBranches, [], [], repoId || '');
  const branches = useMemo(
    () => branchState.data.map(({ name }) => ({ value: name, text: name })),
    [branchState.data],
  );
  const isFetching = {
    branch: branchState.status === 'FETCHING',
  };

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
          <div className={styles.formItem}>
            <Dropdown
              items={branches}
              selected={branch}
              placeholder="브랜치를 선택해주세요."
              loading={isFetching.branch}
              onSelect={onBranchSelect}
            />
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formItem}>
            <textarea
              value={message}
              className={styles.message}
              placeholder="최대 100자까지 입력 가능합니다."
              onChange={handleMessageChange}
            />
          </div>
          <div className={styles.formCol}>
            <div className={styles.formItem}>
              <Dropdown
                items={MOCK_TAG}
                selected={tag}
                placeholder="태그를 선택해주세요."
                onSelect={onTagSelect}
              />
            </div>
            <button className={styles.button} disabled={!isButtonActive}>
              등록 완료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewStep);
