import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const status = useSelector((state: StoreState) => state.auth.me.status);

  return (
    <div>
      Me status: {status}
      <a href="/auth/github">github login</a>
    </div>
  );
};

export default Home;
