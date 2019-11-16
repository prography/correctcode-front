import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { meSaga } from 'store/auth/action';

import AuthCheckPage from 'pages/AuthCheckPage';
import Home from 'pages/Home';
import DashReviewee from 'pages/DashReviewee';
import DashReviewer from 'pages/DashReviewer';
import ReviewStartPage from 'pages/ReviewStartPage';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meSaga());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/callback" exact component={AuthCheckPage} />
        <Route path="/reviewee" exact component={DashReviewee} />
        <Route path="/reviewer" exact component={DashReviewer} />
        <Route path="/start/:step" component={ReviewStartPage} />
      </Switch>
    </Router>
  );
};

export default App;
