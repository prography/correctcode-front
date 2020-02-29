import React, { memo, useState, useMemo, useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames';
import { Dropdown, Dimmed, Loading, Button, ReviewForm } from 'components';
import useFetch from 'hooks/useFetch';
import { getBranches, compareBranch } from 'api/repo';
import { Repo } from 'models/repo';
import { createReview } from 'store/review/action';
import usePrevious from 'hooks/usePrevious';
import { FaGithubSquare, FaCodeBranch, FaLongArrowAltUp } from 'react-icons/fa';

const MAX_MESSAGE_COUNT = 100;

type Props = {
  repo: Repo;
};

enum CompareStatus {
  Init = 'init',
  Behind = 'behind',
  Ahead = 'ahead',
  Loading = 'loading',
}

const CompareMessage = {
  [CompareStatus.Init]: '',
  [CompareStatus.Behind]:
    '❌ Base 브랜치가 Compare 브랜치와 같거나 뒤에 있습니다.',
  [CompareStatus.Ahead]: '👌 등록할 수 있는 브랜치입니다.',
  [CompareStatus.Loading]: '🔍 브랜치 검사 중입니다.',
};

const ReviewStep: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { repoId } = useParams();
  const [firstBranch, setFirstBranch] = useState('');
  const [secondBranch, setSecondBranch] = useState('');
  const [compareStatus, setCompareStatus] = useState<CompareStatus>(
    CompareStatus.Init,
  );
  // const [tag, setTag] = useState('');
  const [message, setMessage] = useState('');
  const currentRepo = useSelector((state: StoreState) =>
    state.repo.items.find(({ id }) => String(id) === repoId),
  );
  const createReviewStatus = useSelector(
    (state: StoreState) => state.review.createReview.status,
  );
  const prevStatus = usePrevious(createReviewStatus);

  const isButtonActive = message && firstBranch && secondBranch;
  const name = currentRepo?.name || '';
  const [ownername, reponame] = name.split('/');

  const onFirstBranchSelect = (branch: string) => {
    setFirstBranch(branch);
    setSecondBranch('');
  };
  const onSecondBranchSelect = (branch: string) => setSecondBranch(branch);
  // const onTagSelect = (tag: string) => setTag(tag);
  const handleMessageChange = (message: string) => {
    setMessage(message);
  };
  const handleCreateReview = () => {
    repoId &&
      dispatch(
        createReview(repoId, {
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

  useEffect(() => {
    if (!repoId || !firstBranch || !secondBranch) {
      return setCompareStatus(CompareStatus.Init);
    }
    setCompareStatus(CompareStatus.Loading);
    compareBranch(repoId, firstBranch, secondBranch).then(({ status }) => {
      setCompareStatus(
        status !== 'ahead' ? CompareStatus.Behind : CompareStatus.Ahead,
      );
    });
  }, [repoId, firstBranch, secondBranch]);

  if (!repoId || !currentRepo) {
    return <Redirect to="/start/repo" />;
  }

  return (
    <div>
      {createReviewStatus === 'FETCHING' && (
        <Dimmed>
          <Loading />
        </Dimmed>
      )}
      <div className="bg-gray-100 rounded p-2 mb-2 flex">
        <FaGithubSquare className="w-8 h-8" />
        <div className="ml-2">
          <span className="text-primary">{ownername}</span>
          <span>/{reponame}</span>
        </div>
      </div>
      <div className="flex justify-between flex-wrap">
        <ReviewForm
          message={message}
          onMessageChange={handleMessageChange}
          maxMessageCount={MAX_MESSAGE_COUNT}
        />
        <div className="flex-1">
          <div className="sm:flex-1 w-full">
            <div className="flex items-center py-2 border-b">
              <FaCodeBranch />
              <Dropdown
                items={branches}
                selected={firstBranch}
                placeholder="Base 브랜치 선택"
                loading={isFetching.branch}
                onSelect={onFirstBranchSelect}
              />
            </div>
            <div className="flex items-center py-2 border-b">
              <FaLongArrowAltUp />
              <Dropdown
                items={secondBranches}
                selected={secondBranch}
                placeholder="Compare 브랜치 선택"
                loading={isFetching.branch}
                onSelect={onSecondBranchSelect}
              />
            </div>

            <div
              className={classnames('mt-2 text-sm', {
                'text-error': compareStatus === CompareStatus.Behind,
                'text-success': compareStatus === CompareStatus.Ahead,
                hidden: compareStatus === CompareStatus.Init,
                'text-gray-400': compareStatus === CompareStatus.Loading,
              })}
            >
              {CompareMessage[compareStatus]}
            </div>
            {/* <div className={styles.formItem}>
              <Dropdown
                items={MOCK_TAG}
                selected={tag}
                placeholder="태그를 선택해주세요."
                onSelect={onTagSelect}
              />
            </div> */}

            <Button
              className="w-full mt-2"
              disabled={
                !isButtonActive || compareStatus !== CompareStatus.Ahead
              }
              onClick={handleCreateReview}
            >
              등록 완료하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ReviewStep);
