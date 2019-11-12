import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'components/Card';
import Nav from 'components/Nav';

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const authStatus = useSelector((state: StoreState) => state.auth.me.status);
  const email = useSelector((state: StoreState) => state.auth.user.email);

  if (authStatus === 'INIT' || authStatus === 'FETCHING') {
    return null;
  }
  return (
    <div>
      Login Status: <strong>{isLoggedIn ? 'LOGIN' : 'NOT LOGGED IN'}</strong>
      {isLoggedIn && <h1>hello! {email}</h1>}
      <a href="/api/auth/github">github login</a>
    </div>
  );
};

export default Home;
