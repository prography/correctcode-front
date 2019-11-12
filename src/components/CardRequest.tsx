import React, { useState } from 'react';
import styles from 'scss/components/Card.module.scss';

const CardRequest = () => {
  //임시적으로 request 상태별 카드 작성, 코드리뷰중인 상태 받아와서 바꿔줘야함
  const [request, setRequest] = useState(true);
  return (
    <div className={styles.box_request}>
      {request ? (
        <div>
          <p className={styles.requestTitle}>코드 리뷰를 요청해보세요! </p>
          <p>
            최상의 코드 전문가들이 6시간 이내에 리뷰를 시작합니다.
            <br /> Python, Javascript 언어 답변이 가장 빠릅니다.
          </p>
          <div className={styles.requestButton}>리뷰 요청하기</div>
        </div>
      ) : (
        <div>
          <p className={styles.requestTitle}>코드 리뷰가 진행 중이에요. </p>
          <p>
            답변은 24시간 내로 완성됩니다.
            <br />한 번에 하나의 Repository만 리뷰 요청이 가능해요!
          </p>
        </div>
      )}
    </div>
  );
};

export default CardRequest;
