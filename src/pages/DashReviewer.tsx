import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import {
  Nav,
  SideBar,
  ReviewerCard,
  CardListNoti,
  FetchingCard,
} from 'components';
import {
  getReviews,
  getUserReviews,
  resetReviews,
  resetUserReviews,
} from 'store/review/action';
import { UserType } from 'models/review';

import cardStyles from 'scss/components/Card.module.scss';
import pageStyles from 'scss/pages/DashBoard.module.scss';

const DashReviewer = () => {
  const [isReviewers, setIsReviewers] = useState(false);
  const { items: reviews } = useSelector((state: StoreState) =>
    isReviewers ? state.review.userReviews : state.review.reviews,
  );
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: StoreState) => state.review.reviews.status === 'FETCHING',
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
      <div className={pageStyles.underNav}>
        <SideBar isFetching={isFetching} />
        <div style={{ display: 'inline-block', width: '816px' }}>
          <div className={cardStyles.reviewerBox}>
            <div
              className={cx(cardStyles.findReviews, {
                [cardStyles.selected]: !isReviewers,
              })}
              onClick={handleReviewsClick}
            >
              리뷰를 기다리는 코드
            </div>
            <div
              className={cx(cardStyles.historyReviews, {
                [cardStyles.selected]: isReviewers,
              })}
              onClick={handleReviewersClick}
            >
              나의 코드 리뷰
            </div>
          </div>
          <div className={cardStyles.cardList}>
            {isFetching ? (
              <FetchingCard />
            ) : (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashReviewer;
