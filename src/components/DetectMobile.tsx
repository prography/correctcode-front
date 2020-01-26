import React, { useState } from 'react';
import useEventListener from 'hooks/useEventListener';
import { MOBILE_WIDTH } from 'constants/device';
import { copy } from 'utils/copy';
import logoImg from 'assets/img/logo.png';
import styles from 'scss/components/DetectMobile.module.scss';

const DetectMobile: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_WIDTH,
  );
  const [copied, setCopied] = useState(false);

  useEventListener('resize', () => {
    if (!isMobile && window.innerWidth < MOBILE_WIDTH) {
      return setIsMobile(true);
    }
    if (isMobile && window.innerWidth >= MOBILE_WIDTH) {
      return setIsMobile(false);
    }
  });

  const handleCopy = () => {
    copy('https://correctcode.dev').then(() => {
      setCopied(true);
    });
  };

  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.header}>
            <img className={styles.logo} src={logoImg} alt="logo" />
          </div>
          <div className={styles.body}>
            <div className={styles.mainText}>
              PC Web을
              <br /> 이용해주세요 :-)
            </div>
            <div className={styles.subText}>
              correct.code는
              <br />
              데스크톱 PC에서
              <br />
              정상적으로 작동합니다.
            </div>
          </div>
          <div className={styles.footer}>
            <button className={styles.button} onClick={handleCopy}>
              {copied ? '링크 복사 성공!' : '링크 공유하기'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default DetectMobile;
