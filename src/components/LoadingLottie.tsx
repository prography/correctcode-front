import React, { useEffect } from 'react';
import styles from 'scss/components/LoadingLottie.module.scss';
import lottie from 'lottie-web';
import animationData from 'assets/img/lottie/data.json';
type Props = {
  isRepoStep?: boolean;
};

const LoadingLottie: React.FC<Props> = ({ isRepoStep }) => {
  const animationDiv = document.getElementById('animation') as HTMLDivElement;
  useEffect(() => {
    lottie.loadAnimation({
      container: animationDiv, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData, // the path to the animation json
    });
  });

  return (
    <div
      className={
        isRepoStep ? styles.lottieNoBackground : styles.lottieBackground
      }
    >
      <div className={styles.lottie} id="animation"></div>
    </div>
  );
};
export default LoadingLottie;
