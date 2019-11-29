import React, { useState } from 'react';
import { Review } from 'models/review';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = {
  review: Review;
};

const PendingCard = ({ review }: Props) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={review.reviewee.profileImg}
        alt="Profile Image"
      />
      <p className={styles.user}>{review.reviewee.name}</p>
    </div>
  );
};
const MatchedCard = ({ review }: Props) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={review.reviewee.profileImg}
        alt="Profile Image"
      />
      <p className={styles.user}>{review.reviewee.name}</p>
      <div
        className={cx(styles.statusColor, {
          [styles.completed]: review.status === 'completed',
        })}
      />
      <div className={styles.status}>{review.status}</div>
    </div>
  );
};

const ReviewerCard: React.FC<Props> = ({ review }) => {
  if (review.status === 'pending') {
    return (
      <div className={styles.box}>
        <div>
          <p className={styles.language}>Language Name</p>
          <p className={styles.time}>{Date.parse(review.createdAt)}</p>
        </div>
        <p className={styles.repo}>{review.repositoryUrl}</p>
        <p className={styles.description}>{review.description}</p>
        <PendingCard review={review} />
      </div>
    );
  }
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.language}>Language Name</p>
        <p className={styles.time}>{Date.parse(review.createdAt)}</p>
      </div>
      <p className={styles.repo}>{review.repositoryUrl}</p>
      <p className={styles.description}>{review.description}</p>
      <MatchedCard review={review} />
    </div>
  );
};

export default ReviewerCard;
