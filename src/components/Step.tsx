import React from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import styles from 'scss/components/Step.module.scss';

type Step = {
  step: string;
  description?: string;
  route?: string;
};
type Props = {
  steps: Step[];
  currentStep: number;
};

const Step: React.FC<Props> = ({ steps, currentStep }) => {
  const history = useHistory();

  const isClickAble = (idx: number) => {
    const { route } = steps[idx];
    const isBefore = idx < currentStep;
    return route && isBefore;
  };
  const handleCircleClick = (idx: number) => () => {
    const { route } = steps[idx];
    isClickAble(idx) && route && history.push(route);
  };

  return (
    <div className={styles.container}>
      {steps.map(({ description }, i) => (
        <div
          className={classnames(styles.wrapper, {
            [styles.isActiveCircle]: i <= currentStep,
            [styles.isActiveLine]: i < currentStep,
          })}
          key={i}
          onClick={handleCircleClick(i)}
        >
          <div className={styles.step}>
            <div
              className={classnames(styles.circle, {
                [styles.isClickAble]: isClickAble(i),
              })}
            />
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
