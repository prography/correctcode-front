import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { meSaga } from 'store/auth/action';

import { PageLayout, Nav } from 'components';

import AuthCheckPage from 'pages/AuthCheckPage';
import Home from 'pages/Home';
import DashReviewee from 'pages/DashReviewee';
import DashReviewer from 'pages/DashReviewer';
import Start from 'pages/Start';

const Pages = () => {
  const { pathname } = useLocation();
  const isStartPage = pathname.startsWith('/start');

  return (
    <>
      <Nav isStartPage={isStartPage} />
      <PageLayout isStartPage={isStartPage}>
        <Switch>
          <Route path="/auth/callback" exact component={AuthCheckPage} />
          <Route path="/reviewee" exact component={DashReviewee} />
          <Route path="/reviewer" exact component={DashReviewer} />
          <Route path="/start/:step" component={Start} />
        </Switch>
      </PageLayout>
    </>
  );
};

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meSaga());
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/*" component={Pages} />
      </Switch>
    </Router>
  );
};

export default App;
