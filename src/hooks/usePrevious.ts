import { useRef, useEffect } from 'react';

const usePrevious = <T>(value: T) => {
  const valueRef = useRef<T>();
  useEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef.current;
};

export default usePrevious;
