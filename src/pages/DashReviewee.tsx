import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, CardListNoti, SideBar, Loading, RevieweeCard } from 'components';
import pageStyles from 'scss/pages/DashBoard.module.scss';
import cardStyles from 'scss/components/Card.module.scss';
import { UserType } from 'models/review';
import { getUserReviewsSaga } from 'store/review/action';

const DashReviewee = () => {
  const reviews = useSelector((state: StoreState) => state.review.reviews);
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: StoreState) => state.review.getUserReviewsStatus !== 'SUCCESS',
  );
  useEffect(() => {
    dispatch(getUserReviewsSaga(UserType.REVIEWEE));
  }, [dispatch]);

  return (
    <div>
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <div className={cardStyles.cardList}>
          <CardListNoti
            userType={UserType.REVIEWEE}
            reviews={reviews}
            isReviewers={false}
          />
          {isFetching ? (
            <Loading />
          ) : (
            <>
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
