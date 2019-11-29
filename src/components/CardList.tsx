import React from 'react';
import { Review, UserType } from 'models/review';
import Card from './Card';
import CardRequest from './CardRequest';
import styles from 'scss/components/Card.module.scss';
import RevieweeCard from './RevieweeCard';
import ReviewerCard from './ReviewerCard';

type Props = {
  reviews: Review[];
  userType: string;
};

const CardList: React.FC<Props> = ({ reviews, userType }) => {
  if (userType === UserType.REVIEWEE) {
    return (
      <div className={styles.cardList}>
        <CardRequest />
        {reviews.map(review => (
          <RevieweeCard key={review.id} review={review} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      <CardRequest />
      {reviews.map(review => (
        <ReviewerCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default CardList;
