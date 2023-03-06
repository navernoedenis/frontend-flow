import { Provider } from 'react-redux';
import type { StoreProviderProps } from './types';
import { createAppStore } from './create-store';

export const StoreProvider = ({
  lazyReducers,
  children,
}: StoreProviderProps) => {
  const rootStore = createAppStore({ lazyReducers });

  return <Provider store={rootStore}>{children}</Provider>;
};
