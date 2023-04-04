import { useEffect } from 'react';
import type { ReactNode } from 'react';

import type { AppReducersLazy, AppStateLazyKey } from 'app/providers/store';
import { useAppStore } from 'shared/hooks';

interface LazyReducersProps {
  children: ReactNode;
  reducers: AppReducersLazy;
}

export function LazyReducers({ children, reducers }: LazyReducersProps) {
  const store = useAppStore();

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]) => {
      store.reducerManager?.add(key as AppStateLazyKey, reducer);
      store.dispatch({ type: `added: ${key} reducer!` });
    });

    return () => {
      Object.entries(reducers).forEach(([key]) => {
        store.reducerManager?.remove(key as AppStateLazyKey);
        store.dispatch({ type: `removed: ${key} reducer!` });
      });
    };
  }, [reducers, store]);

  return <>{children}</>;
}
