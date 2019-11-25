import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsSaga } from 'store/review/action';
import { Review } from 'models/review';
import Card from './Card';
import CardRequest from './CardRequest';
import styles from 'scss/components/Card.module.scss';

type Props = {
  reviews: Review[];
};

const CardList: React.FC<Props> = ({ reviews }) => {
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
