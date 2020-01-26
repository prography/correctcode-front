import { useRef, useEffect } from 'react';

const useEventListener = (
  event: keyof WindowEventMap,
  cb: () => void,
  el: Window | HTMLElement = window,
) => {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  }, [cb]);

  useEffect(() => {
    const handler = () => {
      callbackRef.current();
    };
    el.addEventListener(event, handler);

    return () => {
      el.removeEventListener(event, handler);
    };
  }, [event, el]);
};

export default useEventListener;
