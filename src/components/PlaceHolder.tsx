import React, { useState, useEffect } from 'react';

type Props = {
  timeout?: number;
  placeHolder: React.ReactNode;
};

const PlaceHolder: React.FC<Props> = ({
  children,
  placeHolder,
  timeout = 1000,
}) => {
  const [timerEnd, setTimerEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => setTimerEnd(true), timeout);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (children && timerEnd) {
    return <>{children}</>;
  }
  return <>{placeHolder}</>;
};

export default PlaceHolder;
