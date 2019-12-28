import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { Nav, SideBar, Loading, ReviewerCard, CardListNoti } from 'components';
import { getReviews, getUserReviews } from 'store/review/action';
import { UserType } from 'models/review';

import cardStyles from 'scss/components/Card.module.scss';
import pageStyles from 'scss/pages/DashBoard.module.scss';

const DashReviewer = () => {
  const [isReviewers, setIsReviewers] = useState(false);
  const { items: reviews } = useSelector((state: StoreState) =>
    isReviewers ? state.review.reviews : state.review.userReviews,
  );
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state: StoreState) => state.review.reviews.status === 'FETCHING',
  );

  useEffect(() => {
    if (isReviewers) {
      dispatch(getUserReviews(UserType.REVIEWER));
    } else {
      dispatch(getReviews());
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
        <SideBar />
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
            <CardListNoti
              userType={UserType.REVIEWER}
              reviews={reviews}
              isReviewers={true}
            />
            {isFetching ? (
              <Loading />
            ) : (
              <>
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
