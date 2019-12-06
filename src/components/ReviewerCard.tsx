import React, { FC } from 'react';
import { Review } from 'models/review';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';
import fromUnixTime from 'date-fns/fromUnixTime';

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
  reviewee,
}) => {
  const isPending = status === 'pending';
  const StatusComponent = isPending ? PendingCard : MatchedCard;
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.language}>Language Name</p>
        <p className={styles.time}>{Date.parse(createdAt)}</p>
      </div>
      <a className={styles.repo} href={repositoryUrl}>
        {head}
      </a>
      <p className={styles.description}>{description}</p>
      <StatusComponent reviewee={reviewee} status={status} />
    </div>
  );
};

export default ReviewerCard;
