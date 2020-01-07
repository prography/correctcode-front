import React from 'react';
import styles from 'scss/components/Loading.module.scss';

const FetchingCardModel = () => {
  return (
    <>
      <div className={styles.box}>
        <div>
          <div className={styles.language}> </div>
          <div className={styles.time}> </div>
        </div>

        <div className={styles.repo}> </div>
        <div className={styles.description}></div>
        <div className={styles.statusBox}>
          <div className={styles.user}> </div>
        </div>
      </div>
    </>
  );
};
const FetchingCardNotiModel = () => {
  return (
    <>
      <div className={styles.notiBox}>
        <div className={styles.noti1}> </div>
        <div className={styles.noti2}> </div>
        <div className={styles.noti3}> </div>
      </div>
    </>
  );
};
const FetchingCard: React.FC = () => {
  return (
    <div>
      <FetchingCardNotiModel />
      <FetchingCardModel />
      <FetchingCardModel />
      <FetchingCardModel />
    </div>
  );
};

export default FetchingCard;
