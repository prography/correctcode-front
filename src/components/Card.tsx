import React from 'react';
import styles from 'scss/components/Card.module.scss';

const Card = () => {
  return (
    <div className={styles.box}>
      <div>
        <p className={styles.language}>Language Name</p>
        <p className={styles.time}>2019.11.11 17.15</p>
      </div>
      <p className={styles.repo}>Github Repository</p>
      <p className={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className={styles.statusBox}>
        <div className={styles.profileImg} />
        <p className={styles.user}>userID</p>
        <div className={styles.statusColor} />
        <div className={styles.status}>status</div>
      </div>
    </div>
  );
};

export default Card;
