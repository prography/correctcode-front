import React, { useState } from 'react';
import { Review } from 'models/review';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';
import fromUnixTime from 'date-fns/fromUnixTime';

type Props = {
  review: Review;
};

const MatchedCard = ({ review }: Props) => {
  return (
    <div className={styles.statusBox}>
      <img
        className={styles.profileImg}
        src={review.reviewer.profileImg}
        alt="Profile Image"
      />
      <p className={styles.user}>{review.reviewer.name}</p>
      <div
        className={cx(styles.statusColor, {
          [styles.completed]: review.status === 'completed',
        })}
      />
      <div className={styles.status}>{review.status}</div>
    </div>
  );
};

const RevieweeCard: React.FC<Props> = ({ review }) => {
  if (review.status === 'pending') {
    return (
      <div className={styles.box}>
        <div>
          <p className={styles.language}>Language Name</p>
          <p className={styles.time}>{Date.parse(review.createdAt)}</p>
        </div>
        <p className={styles.repo}>{review.repositoryUrl}</p>
        <p className={styles.description}>{review.description}</p>
        <div className={styles.statusBox}>
          <p className={styles.revieweePending}>리뷰어를 기다리고 있어요.</p>
        </div>
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

export default RevieweeCard;
