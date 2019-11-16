import React from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Step.module.scss';

const MOCK_DATA = [
  {
    text: 'Github 연동',
  },
  {
    text: 'Repo 선택',
  },
  {
    text: 'Branch 선택',
  },
  {
    text: 'Done!',
  },
];
const MOCK_ACTIVE_INDEX = 2;

const Step = () => {
  return (
    <div className={styles.container}>
      {MOCK_DATA.map(({ text }, i) => (
        <div
          className={classnames(styles.wrapper, {
            [styles.isActive]: i < MOCK_ACTIVE_INDEX,
          })}
          key={i}
        >
          <div className={styles.step}>
            <div className={styles.circle} />
            <div className={styles.text}>
              <div className={styles.stepIndex}>Step {i + 1}</div>
              <div className={styles.description}>{text}</div>
            </div>
            {i !== MOCK_DATA.length - 1 && <div className={styles.line} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;
