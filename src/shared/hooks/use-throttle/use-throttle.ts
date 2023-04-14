import { useRef, useCallback } from 'react';

export function useThrottle(callback: VoidFunction, ms = 0) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(() => {
    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        callback();
        timeoutRef.current = null;
      }, ms);
    }
  }, [callback, ms]);
}
