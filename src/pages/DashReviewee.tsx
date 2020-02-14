import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Nav,
  CardListNoti,
  SideBar,
  RevieweeCard,
  FetchingCard,
  // Pagination,
} from 'components';

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
      <div className="w-full sm:w-underNav mt-10 mx-auto flex">
        <SideBar isFetching={isFetching} />
        <div style={{ display: 'inline-block', width: '736px' }}>
          <div className="w-full px-5 sm:px-0 float-none sm:float-left">
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
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashReviewee;
