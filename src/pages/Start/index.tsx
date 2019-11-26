import React, { useMemo } from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Step as StepComponent } from 'components';
import RepoStep from './RepoStep';
import ReviewStep from './ReviewStep';
import styles from 'scss/Start.module.scss';

enum Step {
  github = 'github',
  repo = 'repo',
  review = 'review',
  done = 'done',
}
const STEPS = [
  {
    step: Step.github,
    title: 'Github를 연동해주세요.',
    description: 'Github 연동',
  },
  {
    step: Step.repo,
    title: 'Repository를 선택해주세요.',
    description: 'Repo 선택',
  },
  {
    step: Step.review,
    title: 'Branch를 선택해주세요.',
    description: 'Branch 선택',
  },
  {
    step: Step.done,
    title: '끝!',
    description: 'Done !',
  },
];

const ReviewStartPage = () => {
  const { step: stepParam } = useParams<{ step: Step }>();
  const stepIdx = useMemo(
    () => STEPS.findIndex(({ step }) => step === stepParam),
    [stepParam],
  );

  if (stepIdx < 0) {
    return null;
  }

  const currentStepConfig = STEPS[stepIdx];
  const { title } = currentStepConfig;

  return (
    <div className={styles.container}>
      <StepComponent steps={STEPS} currentStep={stepIdx} />
      <div className={styles.inner}>
        <div className={styles.title}>{title}</div>
        <Switch>
          <Route path="/start/repo" exact component={RepoStep} />
          <Route path="/start/review/:repoId" component={ReviewStep} />
        </Switch>
      </div>
    </div>
  );
};

export default ReviewStartPage;
