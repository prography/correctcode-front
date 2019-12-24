import { useRef, useEffect } from 'react';

const useOnClickOutside = (el: HTMLElement | null, callback: Function) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    const handler = (ev: MouseEvent) => {
      if (!el?.contains(ev.target as Node)) {
        callbackRef.current();
      }
    };
    window.addEventListener('click', handler);
    return () => {
      window.removeEventListener('click', handler);
    };
  }, [el]);
};

export default useOnClickOutside;
