import React from 'react';
import classnames from 'classnames';
import styles from 'scss/components/Step.module.scss';

type Step = {
  step: string;
  description?: string;
};
type Props = {
  steps: Step[];
  currentStep: number;
};

const Step: React.FC<Props> = ({ steps, currentStep }) => {
  return (
    <div className={styles.container}>
      {steps.map(({ description }, i) => (
        <div
          className={classnames(styles.wrapper, {
            [styles.isActive]: i < currentStep,
          })}
          key={i}
        >
          <div className={styles.step}>
            <div className={styles.circle} />
            <div className={styles.text}>
              <div className={styles.stepIndex}>Step {i + 1}</div>
              <div className={styles.description}>{description}</div>
            </div>
            {i !== steps.length - 1 && <div className={styles.line} />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Step;