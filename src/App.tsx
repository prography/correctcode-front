import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import { me } from 'store/auth/action';
import { PageLayout, Nav } from 'components';

import AuthCheckPage from 'pages/AuthCheckPage';
import Home from 'pages/Home';
import DashReviewee from 'pages/DashReviewee';
import DashReviewer from 'pages/DashReviewer';
import ErrorPage from 'pages/ErrorPage';
import Start from 'pages/Start';
import useDevice from 'hooks/useDevice';

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
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </PageLayout>
    </>
  );
};

const App: React.FC = () => {
  const isAuthenticating = useSelector(
    (state: StoreState) =>
      state.auth.meStatus === 'FETCHING' || state.auth.meStatus === 'INIT',
  );
  const dispatch = useDispatch();
  const { search } = useLocation();

  useDevice();

  useEffect(() => {
    const { accessToken } = qs.parse(search);
    const token = Array.isArray(accessToken) ? accessToken[0] : accessToken;
    dispatch(me(token || undefined));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticating) {
    return null;
  }

  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/*" component={Pages} />
    </Switch>
  );
};

export default App;
