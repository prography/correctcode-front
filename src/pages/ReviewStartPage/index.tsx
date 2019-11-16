import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import { Step as StepComponent } from 'components';
import RepoStep from './RepoStep';
import ReviewStep from './ReviewStep';
import styles from 'scss/Start.module.scss';

enum Step {
  repo = 'repo',
  review = 'review',
}
const STEP_TITLE = {
  [Step.repo]: 'Repository를 선택해주세요.',
  [Step.review]: 'Branch를 선택해주세요.',
};
const ReviewStartPage = () => {
  const { step } = useParams<{ step: Step }>();
  const title = STEP_TITLE[step as Step];

  if (!title) {
    return null;
  }

  return (
    <div className={styles.container}>
      <StepComponent />
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
