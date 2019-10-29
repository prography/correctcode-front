import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { meSaga } from 'store/auth/action';

import AuthCheckPage from 'pages/AuthCheckPage';
import Home from 'pages/Home';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meSaga());
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth/callback" exact component={AuthCheckPage} />
      </Switch>
    </Router>
  );
};

export default App;
