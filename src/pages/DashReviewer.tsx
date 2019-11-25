import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import Nav from 'components/Nav';
import SideBar from 'components/SideBar';
import CardList from 'components/CardList';
import { getReviewsSaga, getUserReviewsSaga } from 'store/review/action';
import { UserType } from 'models/review';

import styles from 'scss/components/Card.module.scss';
import pageStyles from 'scss/pages.module.scss';

const DashReviewer = () => {
  const [isReviewers, setIsReviewers] = useState(true);
  const reviews = useSelector((state: StoreState) =>
    isReviewers ? state.review.reviews : state.review.userReviews,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isReviewers) {
      dispatch(getUserReviewsSaga(UserType.REVIEWER));
    } else {
      dispatch(getReviewsSaga());
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
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <div style={{ display: 'inline-block', width: '816px' }}>
          <div className={styles.reviewerBox}>
            <div
              className={cx(styles.findReviews, {
                [styles.selected]: isReviewers,
              })}
              onClick={handleReviewersClick}
            >
              리뷰를 기다리는 코드
            </div>
            <div
              className={cx(styles.historyReviews, {
                [styles.selected]: !isReviewers,
              })}
              onClick={handleReviewsClick}
            >
              나의 코드 리뷰
            </div>
          </div>
          <CardList reviews={reviews} />
        </div>
      </div>
    </div>
  );
};

export default DashReviewer;
