import { configureStore } from '@reduxjs/toolkit';
import type { ReducersMapObject, Reducer } from '@reduxjs/toolkit';

import { authReducer } from 'features/auth';
import { networkStatusReducer } from 'widgets/network-status';
import { client, rtk } from 'shared/api';

import { createReducerManager } from '../create-manager';
import type { AppState, AppStoreParams, ThunkExtra } from '../types';

export const createStore = (params: AppStoreParams = {}) => {
  const { lazyReducers = {}, preloadedState = {} } = params;

  const rootReducer: ReducersMapObject<AppState> = {
    auth: authReducer,
    networkStatus: networkStatusReducer,
    [rtk.reducerPath]: rtk.reducer,
    ...lazyReducers,
  };

  const thunkExtra: ThunkExtra = {
    client,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    devTools: __IS_DEV__,
    preloadedState: preloadedState as AppState,
    reducer: reducerManager.reduce as Reducer<AppState>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: thunkExtra,
      },
    }).concat(rtk.middleware),
  });

  // eslint-disable-next-line
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
