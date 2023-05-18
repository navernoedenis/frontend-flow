import { Provider } from 'react-redux';
import type { AppStoreProviderProps } from '../types';
import { createStore } from '../create-store';

export const StoreProvider = ({
  lazyReducers,
  children,
}: AppStoreProviderProps) => {
  const rootStore = createStore({
    lazyReducers,
  });

  return <Provider store={rootStore}>{children}</Provider>;
};
