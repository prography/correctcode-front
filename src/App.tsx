import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginSaga } from 'store/auth/action';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((state: StoreState) => state.auth.user.username);

  const handleClick = () =>
    dispatch(
      loginSaga({
        username: name,
      }),
    );
  return (
    <div>
      {username}
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleClick}>login</button>
    </div>
  );
};

export default App;
