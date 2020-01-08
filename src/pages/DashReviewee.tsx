import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Nav,
  CardListNoti,
  SideBar,
  RevieweeCard,
  FetchingCard,
} from 'components';
import pageStyles from 'scss/pages/DashBoard.module.scss';
import cardStyles from 'scss/components/Card.module.scss';
import { UserType } from 'models/review';
import { getUserReviews } from 'store/review/action';
const DashReviewee = () => {
  const reviews = useSelector(
    (state: StoreState) => state.review.userReviews.items,
  );
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: StoreState) => state.review.userReviews.status !== 'SUCCESS',
  );
  useEffect(() => {
    dispatch(getUserReviews(UserType.REVIEWEE));
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar isFetching={isFetching} />
        <div className={cardStyles.cardList}>
          {isFetching ? (
            <FetchingCard />
          ) : (
            <>
              <CardListNoti
                userType={UserType.REVIEWEE}
                reviews={reviews}
                isReviewers={false}
              />
              {reviews.map(review => (
                <RevieweeCard key={review.id} {...review} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashReviewee;
