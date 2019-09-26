import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SAY_HI } from 'store';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const hi = useSelector((state: StoreState) => state.hi);

  const handleClick = () => dispatch({ type: SAY_HI });
  return (
    <div>
      {hi}
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default App;
