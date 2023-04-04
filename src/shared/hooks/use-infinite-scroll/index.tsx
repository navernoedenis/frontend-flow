import { useRef, useCallback, useEffect } from 'react';

interface InfiniteScrollProps {
  callback: VoidFunction;
}

export function useInfiniteScroll({ callback }: InfiniteScrollProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);

  const handleObserver = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        callback();
      }
    },
    [callback],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [handleObserver]);

  return { triggerRef };
}
