import { configureStore } from '@reduxjs/toolkit';
import type { ReducersMapObject, Reducer } from '@reduxjs/toolkit';

import { authReducer } from 'features/auth';
import { client } from 'shared/client';
import { createReducerManager } from './create-manager';

import type { AppState, AppStore, AppStoreParams, ThunkExtra } from './types';

export const createAppStore = (params: AppStoreParams = {}) => {
  const { lazyReducers = {}, preloadedState = {} } = params;

  const rootReducer: ReducersMapObject<AppState> = {
    auth: authReducer,
    ...lazyReducers,
  };

  const thunkExtra: ThunkExtra = {
    client,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store: AppStore = configureStore({
    devTools: __IS_DEV__,
    preloadedState: preloadedState as AppState,
    reducer: reducerManager.reduce as Reducer<AppState>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: thunkExtra,
      },
    }),
  });

  store.reducerManager = reducerManager;
  return store;
};
