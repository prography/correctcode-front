import React, { useState } from 'react';
import styles from 'scss/components/Card.module.scss';

const CardRequest = () => {
  //임시적으로 request 상태별 카드 작성, 코드리뷰중인 상태 받아와서 바꿔줘야함
  const [request, setRequest] = useState(true);

  const revieweeRequest = () => {
    return (
      <div className={styles.box_request}>
        <p className={styles.requestTitle}>코드 리뷰를 요청해보세요! </p>
        <p>
          최상의 코드 전문가들이 6시간 이내에 리뷰를 시작합니다.
          <br /> Python, Javascript 언어 답변이 가장 빠릅니다.
        </p>
        <div className={styles.requestButton}>리뷰 요청하기</div>
      </div>
    );
  };
  const revieweeWaiting = () => {
    return (
      <div className={styles.box_request}>
        <p className={styles.requestTitle}>코드 리뷰가 진행 중이에요. </p>
        <p>
          답변은 24시간 내로 완성됩니다.
          <br />한 번에 하나의 Repository만 리뷰 요청이 가능해요!
        </p>
      </div>
    );
  };
  const reviewerFindNull = () => {
    return (
      <div className={styles.box_request}>
        <p className={styles.requestTitle}>리뷰를 기다리는 코드가 없어요.</p>
        <p>
          곧 리뷰가 등록될거에요.
          <br />
          심호흡 한 번 하고 조금만 기다려보아요.
        </p>
      </div>
    );
  };
  const reviewerHistoryNull = () => {
    return (
      <div className={styles.box_request}>
        <p className={styles.requestTitle}>리뷰 중인 코드가 없어요.</p>
        <p>
          지금 바로 코드 리뷰를 시작해보세요.
          <br />
          많은 사람들이 리뷰를 기다리고있습니다.
        </p>
      </div>
    );
  };

  return null;
};

export default CardRequest;
