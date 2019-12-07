import React, { FC } from 'react';
import { Review } from 'models/review';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';
import { format } from 'date-fns';

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
  description,
  repositoryUrl,
}) => {
  const isPending = status === 'pending';
  const StatusComponent = isPending ? PendingCard : MatchedCard;
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.language}>{language}</p>
        <p className={styles.time}>{format(createdAt, 'yyyy-MM-dd')}</p>
      </div>
      <a className={styles.repo} href={repositoryUrl}>
        {head}
      </a>
      <p className={styles.description}>{description}</p>
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
