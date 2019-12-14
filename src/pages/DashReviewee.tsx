import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav, CardList, SideBar, LoadingLottie } from 'components';
import pageStyles from 'scss/pages/DashBoard.module.scss';
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
      {isFetching && <LoadingLottie />}
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <CardList reviews={reviews} userType={UserType.REVIEWEE} />
      </div>
    </div>
  );
};

export default DashReviewee;
