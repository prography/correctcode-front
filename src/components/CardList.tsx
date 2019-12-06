import React from 'react';
import { Review, UserType } from 'models/review';
import { CardListNoti, RevieweeCard, ReviewerCard } from 'components';
import styles from 'scss/components/Card.module.scss';

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
      {userType === UserType.REVIEWEE
        ? reviews.map(review => <RevieweeCard key={review.id} {...review} />)
        : reviews.map(review => <ReviewerCard key={review.id} {...review} />)}
    </div>
  );
};

export default CardList;
