import React from 'react';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';

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
    <>
      <div className="flex sm:w-3/4 m-auto">
        {steps.map((_, i) => {
          const isLast = i === steps.length - 1;
          return (
            <React.Fragment key={i}>
              <div
                className={classnames('flex items-center', !isLast && 'flex-1')}
                onClick={handleCircleClick(i)}
              >
                <div
                  className={classnames('rounded-full w-8 h-8', {
                    'bg-primary': i <= currentStep,
                    'bg-gray-200': i > currentStep,
                    'cursor-pointer': isClickAble(i),
                  })}
                />
                <div
                  className={classnames('flex-1 h-2', {
                    'bg-primary': i < currentStep,
                    'bg-gray-200': i >= currentStep,
                  })}
                />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex sm:w-3/4 m-auto">
        {steps.map(({ description }, i) => {
          const isLast = i === steps.length - 1;
          return (
            <div className={classnames(!isLast && 'flex-1')} key={i}>
              <div className="w-8 whitespace-no-wrap">
                <span className="text-xs sm:text-sm text-gray-400">
                  Step {i + 1}
                </span>
                <br />
                <span className="text-xs sm:text-base">{description}</span>
              </div>
              <div className="flex-1 h-2" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Step;
