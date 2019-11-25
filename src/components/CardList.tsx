import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsSaga } from 'store/review/action';
import { ReviewType } from 'models/review';
import Card from './Card';
import CardRequest from './CardRequest';
import styles from 'scss/components/Card.module.scss';

type Props = {
  reviewType: ReviewType;
};

const CardList: React.FC<Props> = ({ reviewType }) => {
  const reviews = useSelector((state: StoreState) => state.review.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsSaga(reviewType));
  }, []);

  return (
    <div className={styles.cardList}>
      <CardRequest />
      {reviews.map(review => (
        <Card key={review.id} review={review} />
      ))}
    </div>
  );
};

export default CardList;
