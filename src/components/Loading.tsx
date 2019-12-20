import React from 'react';
import { Lottie } from 'components';
import styles from 'scss/components/Loading.module.scss';
import animationData from 'assets/img/lottie/data.json';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <Lottie animationData={animationData} containerStyle={{ height: 120 }} />
    </div>
  );
};
export default Loading;
