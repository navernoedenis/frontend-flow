import { useEffect } from 'react';

export function useEffectOnce(callback: VoidFunction) {
  useEffect(() => {
    if (!__IS_STORYBOOK__) {
      callback();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
