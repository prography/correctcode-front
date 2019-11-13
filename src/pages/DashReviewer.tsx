import React from 'react';
import cx from 'classnames';

import Nav from 'components/Nav';
import SideBar from 'components/SideBar';
import CardList from 'components/CardList';
import styles from 'scss/components/Card.module.scss';
import pageStyles from 'scss/pages.module.scss';

const DashReviewer = () => {
  return (
    <div>
      <Nav />
      <div className={pageStyles.underNav}>
        <SideBar />
        <div style={{ display: 'inline-block', width: '816px' }}>
          <div className={styles.reviewerBox}>
            <div className={cx(styles.findReviews, styles.selected)}>
              리뷰를 기다리는 코드
            </div>
            <div className={styles.historyReviews}>나의 코드 리뷰</div>
          </div>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default DashReviewer;
