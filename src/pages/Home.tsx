import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const isLoggedIn = useSelector(
    (state: StoreState) => state.auth.user.isLoggedIn,
  );
  const email = useSelector((state: StoreState) => state.auth.user.email);

  return (
    <div>
      Login Status: <strong>{isLoggedIn ? 'LOGIN' : 'NOT LOGGED IN'}</strong>
      {isLoggedIn && <h1>hello! {email}</h1>}
      <a href="/api/auth/github">github login</a>
    </div>
  );
};

export default Home;
