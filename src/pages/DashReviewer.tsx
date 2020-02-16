import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import {
  Nav,
  SideBar,
  ReviewerCard,
  CardListNoti,
  CardPlaceHolder,
  PlaceHolder,
  // Pagination,
} from 'components';
import {
  getReviews,
  getUserReviews,
  resetReviews,
  resetUserReviews,
} from 'store/review/action';
import { UserType } from 'models/review';

const DashReviewer = () => {
  const [isReviewers, setIsReviewers] = useState(false);
  const { items: reviews } = useSelector((state: StoreState) =>
    isReviewers ? state.review.userReviews : state.review.reviews,
  );
  const dispatch = useDispatch();
  const isReady = useSelector(
    (state: StoreState) => state.review.reviews.status === 'SUCCESS',
  );

  useEffect(() => {
    if (isReviewers) {
      dispatch(getUserReviews(UserType.REVIEWER));
      dispatch(resetReviews());
    } else {
      dispatch(getReviews());
      dispatch(resetUserReviews());
    }
  }, [dispatch, isReviewers]);

  const handleReviewersClick = () => {
    setIsReviewers(true);
  };
  const handleReviewsClick = () => {
    setIsReviewers(false);
  };

  return (
    <div>
      <Nav isReviewer={true} />
      <div className="w-full sm:w-underNav mt-10 mx-auto flex">
        <SideBar />
        <div style={{ display: 'inline-block', width: '736px' }}>
          <div className="w-11/12 sm:w-full mx-auto h-16 rounded-lg flex text-lg font-bold mb-10">
            <div
              className={cx(
                'w-1/2 h-16 border-0 rounded-l-lg  flex justify-center items-center cursor-pointer',
                {
                  'bg-reviewergray text-description': isReviewers,
                  'bg-primary text-white': !isReviewers,
                },
              )}
              onClick={handleReviewsClick}
            >
              리뷰를 기다리는 코드
            </div>
            <div
              className={cx(
                'w-1/2 h-16  border-0 rounded-r-lg flex justify-center items-center cursor-pointer',
                {
                  'bg-primary text-white': isReviewers,
                  'bg-reviewergray text-description': !isReviewers,
                },
              )}
              onClick={handleReviewersClick}
            >
              나의 코드 리뷰
            </div>
          </div>
          <div className="w-full px-5 sm:px-0 float-none sm:float-left">
            <PlaceHolder placeHolder={<CardPlaceHolder />}>
              {isReady && (
                <>
                  <CardListNoti
                    userType={UserType.REVIEWER}
                    reviews={reviews}
                    isReviewers={true}
                  />
                  {reviews.map(review => (
                    <ReviewerCard key={review.id} {...review} />
                  ))}
                </>
              )}
            </PlaceHolder>
            {/* <Pagination /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashReviewer;
