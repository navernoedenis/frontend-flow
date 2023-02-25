import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { authReducer } from 'features/auth';
import type { AuthState } from 'features/auth';

import { counterReducer } from 'entities/counter';
import type { CounterState } from 'entities/counter';

interface RootState {
  auth: AuthState;
  counter: CounterState;
}

export const createStore = (preloadedState?: RootState) => {
  const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    counter: counterReducer,
  });

  return configureStore<RootState>({
    devTools: __IS_DEV__,
    preloadedState,
    reducer: rootReducer,
  });
};

export const rootStore = createStore();

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={rootStore}>{children}</Provider>
);
