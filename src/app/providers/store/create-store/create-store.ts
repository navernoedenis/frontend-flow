import { configureStore } from '@reduxjs/toolkit';
import type { ReducersMapObject, Reducer } from '@reduxjs/toolkit';

import { authReducer } from 'features/auth';
import { networkStatusReducer } from 'widgets/network-status';
import { pageScrollReducer } from 'features/save-page-scroll';

import { client } from 'shared/client';
import { createReducerManager } from '../create-manager/create-manager';

import type { AppState, AppStoreParams, ThunkExtra } from '../types';

export const createAppStore = (params: AppStoreParams = {}) => {
  const { lazyReducers = {}, preloadedState = {} } = params;

  const rootReducer: ReducersMapObject<AppState> = {
    auth: authReducer,
    networkStatus: networkStatusReducer,
    pageScroll: pageScrollReducer,
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
    }),
  });

  // eslint-disable-next-line
  // @ts-expect-error
  store.reducerManager = reducerManager;

  return store;
};
