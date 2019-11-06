import React from 'react';
import { Switch, Route, useParams } from 'react-router-dom';
import RepoStep from './RepoStep';
import ReviewStep from './ReviewStep';

enum Step {
  repo = 'repo',
  review = 'review',
}
const STEP_TITLE = {
  [Step.repo]: '레포 선택',
  [Step.review]: '리뷰 생성',
};
const ReviewStartPage = () => {
  const { step } = useParams<{ step: Step }>();
  const title = STEP_TITLE[step as Step];

  if (!title) {
    return null;
  }

  return (
    <div>
      <h1>{title}</h1>
      <Switch>
        <Route path="/start/repo" exact component={RepoStep} />
        <Route path="/start/review/:repoId" component={ReviewStep} />
      </Switch>
    </div>
  );
};

export default ReviewStartPage;
