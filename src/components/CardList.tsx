import React, { useEffect } from 'react';
import Card from './Card';
import CardRequest from './CardRequest';
import styles from 'scss/components/Card.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getReviewsSaga } from 'store/review/action';

const CardList = () => {

  const reviews = useSelector((state: StoreState) => state.review.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsSaga());
  }, []);


  console.log(reviews)
  return (
    <div className={styles.cardList}>
      <CardRequest />
      {reviews.map(review => (
        <Card key={review.id} />
      ))}
    </div>
  );
};

export default CardList;
