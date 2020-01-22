import React, { FC } from 'react';
import { Review } from 'models/review';
import { CommonCard } from 'components';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = Review;

type SubCardProps = Pick<Review, 'reviewee' | 'status'>;

const PendingCard: FC<SubCardProps> = ({ reviewee }) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={reviewee.profileImg}
        alt="Profile"
      />
      <p className={styles.user}>{reviewee.name}</p>
    </div>
  );
};
const MatchedCard: FC<SubCardProps> = ({ reviewee, status }) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={reviewee.profileImg}
        alt="Profile"
      />
      <p className={styles.user}>{reviewee.name}</p>
      <div
        className={cx(styles.statusColor, {
          [styles.completed]: status === 'completed',
        })}
      />
      <div className={styles.status}>{status}</div>
    </div>
  );
};

const ReviewerCard: React.FC<Props> = ({
  status,
  repositoryUrl,
  description,
  head,
  createdAt,
  language,
  reviewee,
  number,
}) => {
  const isPending = status === 'pending';
  const StatusComponent = isPending ? PendingCard : MatchedCard;
  return (
    <div className={styles.box}>
      <CommonCard
        number={number}
        language={language}
        createdAt={createdAt}
        repositoryUrl={repositoryUrl}
        head={head}
        description={description}
      />
      <StatusComponent reviewee={reviewee} status={status} />
    </div>
  );
};

export default ReviewerCard;
