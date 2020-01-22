import React, { FC } from 'react';
import { Review } from 'models/review';
import { CommonCard } from 'components';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = Review;
type MatchedCardProps = Pick<Review, 'reviewer' | 'status'>;

const PendingCard: FC = () => (
  <div className={styles.statusBox}>
    <p className={styles.revieweePending}>리뷰어를 기다리고 있어요.</p>
  </div>
);
const MatchedCard: FC<MatchedCardProps> = ({ reviewer, status }) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={reviewer.profileImg}
        alt="Profile"
      />
      <p className={styles.user}>{reviewer.name}</p>
      <div
        className={cx(styles.statusColor, {
          [styles.completed]: status === 'completed',
        })}
      />
      <div className={styles.status}>{status}</div>
    </div>
  );
};

const RevieweeCard: React.FC<Props> = ({
  status,
  reviewer,
  createdAt,
  language,
  head,
  number,
  description,
  repositoryUrl,
}) => {
  const isPending = status === 'pending';
  const StatusComponent = isPending ? PendingCard : MatchedCard;
  return (
    <div className={styles.box}>
      <CommonCard
        language={language}
        number={number}
        createdAt={createdAt}
        repositoryUrl={repositoryUrl}
        head={head}
        description={description}
      />
      {isPending ? (
        <div className={styles.statusBox}>
          <p className={styles.revieweePending}>리뷰어를 기다리고 있어요.</p>
        </div>
      ) : (
        <StatusComponent status={status} reviewer={reviewer} />
      )}
    </div>
  );
};

export default RevieweeCard;
