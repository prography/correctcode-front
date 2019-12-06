import React, { memo, useState, useMemo, useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { Dropdown } from 'components';
import GithubIcon from 'assets/img/GitHubMark.png';
import useFetch from 'hooks/useFetch';
import { getBranches } from 'api/repo';
import { Repo } from 'models/repo';
import { createReviewSaga } from 'store/review/action';
import usePrevious from 'hooks/usePrevious';

import styles from 'scss/pages/ReviewStep.module.scss';

const MAX_MESSAGE_COUNT = 100;

type Props = {
  repo: Repo;
};

const ReviewStep: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { repoId } = useParams();
  const [firstBranch, setFirstBranch] = useState('');
  const [secondBranch, setSecondBranch] = useState('');
  // const [tag, setTag] = useState('');
  const [message, setMessage] = useState('');
  const currentRepo =
    useSelector((state: StoreState) =>
      state.repo.repos.find(({ id }) => String(id) === repoId),
    ) || ({} as any);
  const createReviewStatus = useSelector(
    (state: StoreState) => state.review.createReviewStatus,
  );
  const prevStatus = usePrevious(createReviewStatus);

  const isMaxMessageCount = message.length === MAX_MESSAGE_COUNT;
  const isButtonActive = message && firstBranch && secondBranch;
  const { name = '' } = currentRepo;
  const [ownername, reponame] = name.split('/');

  const onFirstBranchSelect = (branch: string) => setFirstBranch(branch);
  const onSecondBranchSelect = (branch: string) => setSecondBranch(branch);
  // const onTagSelect = (tag: string) => setTag(tag);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleCreateReview = () => {
    repoId &&
      dispatch(
        createReviewSaga(repoId, {
          title: 'temp title',
          description: message,
          base: firstBranch,
          head: secondBranch,
        }),
      );
  };

  // branch 패칭
  const { state: branchState } = useFetch(getBranches, [], [], repoId || '');
  const branches = useMemo(
    () => branchState.data.map(({ name }) => ({ value: name, text: name })),
    [branchState.data],
  );
  const secondBranches = useMemo(
    () => branches.filter(branch => branch.value !== firstBranch),
    [firstBranch, branches],
  );
  const isFetching = {
    branch: branchState.status === 'FETCHING',
  };

  useEffect(() => {
    if (firstBranch) {
      setSecondBranch('');
    }
  }, [firstBranch]);

  useEffect(() => {
    if (message.length > MAX_MESSAGE_COUNT) {
      alert('메시지는 100자까지 입력 가능합니다.');
      setMessage(prev => prev.slice(0, MAX_MESSAGE_COUNT));
    }
  }, [message]);

  useEffect(() => {
    if (prevStatus === 'FETCHING' && createReviewStatus === 'SUCCESS') {
      history.push('/reviewee');
    }
  }, [createReviewStatus, prevStatus, history]);

  if (!repoId) {
    return null;
  }

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
              selected={firstBranch}
              placeholder="Base 브랜치 선택"
              loading={isFetching.branch}
              onSelect={onFirstBranchSelect}
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
            <div
              className={classnames(styles.messageCount, {
                [styles.maxMessageCount]: isMaxMessageCount,
              })}
            >
              <span>{message.length}/100</span>
            </div>
          </div>
          <div className={styles.formCol}>
            <div className={styles.formItem}>
              <Dropdown
                items={secondBranches}
                selected={secondBranch}
                placeholder="Compare 브랜치 선택"
                loading={isFetching.branch}
                onSelect={onSecondBranchSelect}
              />
            </div>
            {/* <div className={styles.formItem}>
              <Dropdown
                items={MOCK_TAG}
                selected={tag}
                placeholder="태그를 선택해주세요."
                onSelect={onTagSelect}
              />
            </div> */}
            <button
              className={styles.button}
              disabled={!isButtonActive}
              onClick={handleCreateReview}
            >
              등록 완료하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewStep);
