import React from 'react';
import { Review, UserType } from 'models/review';
import CardListNoti from './CardListNoti';
import styles from 'scss/components/Card.module.scss';
import RevieweeCard from './RevieweeCard';
import ReviewerCard from './ReviewerCard';

type Props = {
  reviews: Review[];
  userType: UserType;
  isReviewers?: boolean;
};

const CardList: React.FC<Props> = ({ reviews, userType, isReviewers }) => {
  return (
    <div className={styles.cardList}>
      <CardListNoti
        userType={userType}
        reviews={reviews}
        isReviewers={!!isReviewers}
      />
      {reviews.map(review => (
        <ReviewerCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export default CardList;
