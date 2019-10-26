import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSaga } from 'store/auth/action';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const status = useSelector((state: StoreState) => state.auth.me.status);

  const handleClick = () => dispatch(loginSaga());

  return (
    <div>
      Me status: {status}
      <button onClick={handleClick}>github login</button>
    </div>
  );
};

export default App;
