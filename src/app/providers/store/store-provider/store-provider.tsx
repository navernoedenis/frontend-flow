import { Provider } from 'react-redux';
import type { AppStoreProviderProps } from '../types';
import { createAppStore } from '../create-store/create-store';

export const AppStoreProvider = ({
  lazyReducers,
  children,
}: AppStoreProviderProps) => {
  const rootStore = createAppStore({ lazyReducers });

  return <Provider store={rootStore}>{children}</Provider>;
};
