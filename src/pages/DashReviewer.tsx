import React, { useState } from 'react';
import cx from 'classnames';
import Nav from 'components/Nav';
import SideBar from 'components/SideBar';
import CardList from 'components/CardList';
import { ReviewType } from 'models/review';

import styles from 'scss/components/Card.module.scss';
import pageStyles from 'scss/pages.module.scss';

const DashReviewer = () => {
  const [reviewerSelect, setReviewerSelect] = useState(ReviewType.REVIEWER);
  const selectSearch = () => {
    if (reviewerSelect === ReviewType.REVIEWER_DONE) {
      setReviewerSelect(ReviewType.REVIEWER);
    }
  };
  const selectDone = () => {
    if (reviewerSelect === ReviewType.REVIEWER) {
      setReviewerSelect(ReviewType.REVIEWER_DONE);
    }
  };

  return (
    <div>
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <div style={{ display: 'inline-block', width: '816px' }}>
          <div className={styles.reviewerBox}>
            <div
              className={cx(
                styles.findReviews,
                `${
                  reviewerSelect === ReviewType.REVIEWER ? styles.selected : ''
                }`,
              )}
              onClick={() => selectSearch()}
            >
              리뷰를 기다리는 코드
            </div>
            <div
              className={cx(
                styles.historyReviews,
                `${
                  reviewerSelect === ReviewType.REVIEWER_DONE
                    ? styles.selected
                    : ''
                }`,
              )}
              onClick={() => selectDone()}
            >
              나의 코드 리뷰
            </div>
          </div>
          <CardList reviewType={reviewerSelect} />
        </div>
      </div>
    </div>
  );
};

export default DashReviewer;
