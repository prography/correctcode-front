import React from 'react';
import Nav from 'components/Nav';
import SideBar from 'components/SideBar';
import CardList from 'components/CardList';
import styles from 'scss/components/Card.module.scss';

const DashReviewer = () => {
  return (
    <div>
      <Nav />
      <div
        style={{
          width: 1119,
          margin: 'auto',
          display: 'flex',
          marginTop: '116px',
        }}
      >
        <SideBar />
        <div style={{ display: 'inline-block', width: '816px' }}>
          <div className={styles.reviewerBox}>
            <div className={`${styles.findReviews} ${styles.selected}`}>
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
