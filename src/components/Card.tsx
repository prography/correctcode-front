import React, { useState } from 'react';
import { Review } from 'models/review';
import { useSelector } from 'react-redux';
import cx from 'classnames';
import styles from 'scss/components/Card.module.scss';

type Props = {
  review: Review;
  userType: string;
};

const Card: React.FC<Props> = ({ review, userType }) => {
  const CommonCard = () => {
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
  const PendingCard = () => {
    if (userType === 'reviewer') {
      return (
        <div className={styles.statusBox}>
          <div className={styles.profileImg} />
          <p className={styles.user}>userID</p>
        </div>
      );
    } else {
      return (
        <div className={styles.statusBox}>
          <p className={styles.revieweePending}>리뷰어를 기다리고 있어요.</p>
        </div>
      );
    }
  };
  const MatchedCard = () => {
    return (
      <div className={styles.statusBox}>
        <div className={styles.profileImg} />
        <p className={styles.user}>userID</p>
        <div
          className={cx(styles.statusColor, {
            [styles.completed]: review.status === 'completed',
          })}
        />
        <div className={styles.status}>{review.status}</div>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <CommonCard />
      <PendingCard />
    </div>
  );
};

export default Card;
