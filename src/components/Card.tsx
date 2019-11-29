import React, { useState } from 'react';
import { Review } from 'models/review';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = {
  review: Review;
  userType: string;
};
type reviewType = {
  review: Review;
};

const CommonCard = ({ review }: reviewType) => {
  return (
    <>
      <div>
        <p className={styles.language}>Language Name</p>
        <p className={styles.time}>{Date.parse(review.createdAt)}</p>
      </div>
      <p className={styles.repo}>{review.repositoryUrl}</p>
      <p className={styles.description}>{review.description}</p>
    </>
  );
};
const PendingCard = ({ review, userType }: Props) => {
  if (userType === 'reviewer') {
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
  }
  return (
    <div className={styles.statusBox}>
      <p className={styles.revieweePending}>리뷰어를 기다리고 있어요.</p>
    </div>
  );
};
const MatchedCard = ({ review, userType }: Props) => {
  const reviewId =
    userType === 'reviewer' ? review.reviewee.name : review.reviewer.name;
  const reviewImg =
    userType === 'reviewer'
      ? review.reviewee.profileImg
      : review.reviewer.profileImg;
  return (
    <div className={styles.statusBox}>
      <img className={styles.profileImg} src={reviewImg} alt="Profile Image" />
      <p className={styles.user}>{reviewId}</p>
      <div
        className={cx(styles.statusColor, {
          [styles.completed]: review.status === 'completed',
        })}
      />
      <div className={styles.status}>{review.status}</div>
    </div>
  );
};

const Card: React.FC<Props> = ({ review, userType }) => {
  if (review.status === 'pending') {
    return (
      <div className={styles.box}>
        <CommonCard review={review} />
        <PendingCard review={review} userType={userType} />
      </div>
    );
  }
  return (
    <div className={styles.box}>
      <CommonCard review={review} />
      <MatchedCard review={review} userType={userType} />
    </div>
  );
};

export default Card;
