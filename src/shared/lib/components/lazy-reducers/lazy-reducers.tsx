import { useEffect } from 'react';
import type { ReactNode } from 'react';

import type { AppReducersLazy, AppStateLazyKey } from 'app/providers/store';
import { useAppStore } from 'shared/hooks';

interface LazyReducersProps {
  children: ReactNode;
  keepAfterUnmount?: boolean;
  reducers: AppReducersLazy;
}

export function LazyReducers({
  children,
  keepAfterUnmount = false,
  reducers,
}: LazyReducersProps) {
  const store = useAppStore();

  useEffect(() => {
    const reducersKeys = Object.keys(store.reducerManager.getReducerMap());

    Object.entries(reducers).forEach(([key, reducer]) => {
      if (!reducersKeys.includes(key)) {
        store.reducerManager.add(key as AppStateLazyKey, reducer);
        store.dispatch({ type: `added: ${key} reducer!` });
      }
    });

    return () => {
      if (!keepAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          store.reducerManager.remove(key as AppStateLazyKey);
          store.dispatch({ type: `removed: ${key} reducer!` });
        });
      }
    };
  }, [keepAfterUnmount, reducers, store]);

  return <>{children}</>;
}
