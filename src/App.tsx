import React, { useEffect } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
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
import PrToReview from 'pages/PrToReview';
import useLocationSearch from 'hooks/useLocationSearch';

const ProtectedPages = () => {
  const { pathname } = useLocation();
  const isStartPage = pathname.startsWith('/start');
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const query = useLocationSearch();
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return (
      <Redirect to={`?${qs.stringify({ ...query, redirectUrl: pathname })}`} />
    );
  }

  return (
    <>
      <Nav isStartPage={isStartPage} />
      <PageLayout isStartPage={isStartPage}>
        <Switch>
          <Route path="/auth/callback" exact component={AuthCheckPage} />
          <Route path="/prToReview" exact component={PrToReview} />
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
  const { accessToken } = useLocationSearch();

  useEffect(() => {
    const token = accessToken?.toString();
    dispatch(me(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isAuthenticating) {
    return null;
  }

  return (
    <>
      <Route path="/" exact component={Home} />
      <ProtectedPages />
    </>
  );
};

export default App;
