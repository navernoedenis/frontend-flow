import { combineReducers } from '@reduxjs/toolkit';
import type { AnyAction, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import type { AppState, AppStateLazyKey, ReducerManager } from '../types';

export function createReducerManager(
  initialReducers: ReducersMapObject<AppState>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);
  let keysToRemove: AppStateLazyKey[] = [];

  return {
    reduce: (state: AppState, action: AnyAction) => {
      if (keysToRemove.length) {
        state = { ...state };
        keysToRemove.forEach((key) => delete state[key]);
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    getReducerMap: () => reducers,

    add: (key: AppStateLazyKey, reducer: Reducer) => {
      if (!key || reducers[key]) return;
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: AppStateLazyKey) => {
      if (!key || !reducers[key]) return;
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
