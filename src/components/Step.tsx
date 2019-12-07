import React from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  return (
    <div className={styles.container}>
      {steps.map(({ description }, i) => (
        <div
          className={classnames(styles.wrapper, {
            [styles.isActiveCircle]: i <= currentStep,
            [styles.isActiveLine]: i < currentStep,
          })}
          key={i}
          onClick={() => {
            i == 1 && history.push('/start/repo');
          }}
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
