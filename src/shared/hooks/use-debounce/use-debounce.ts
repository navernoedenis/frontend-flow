import { useRef, useCallback } from 'react';

export function useDebounce(callback: VoidFunction, ms = 0) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(callback, ms);
  }, [callback, ms]);
}
