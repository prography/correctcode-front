import React from 'react';
import { Review } from 'models/review';
import { format } from 'date-fns';
import styles from 'scss/components/Card.module.scss';

type Props = {
  review: Review;
};

const Card: React.FC<Props> = ({ review }) => {
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.language}>Language Name</p>
        <p className={styles.time}>{Date.parse(review.createdAt)}</p>
      </div>
      <p className={styles.repo}>{review.repositoryUrl}</p>
      <p className={styles.description}>{review.description}</p>

      <div className={styles.statusBox}>
        <div className={styles.profileImg} />
        <p className={styles.user}>userID</p>
        <div className={styles.statusColor} />
        <div className={styles.status}>{review.status}</div>
      </div>
    </div>
  );
};

export default Card;
