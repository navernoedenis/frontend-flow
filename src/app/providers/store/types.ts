import type { ReactNode } from 'react';
import type { AxiosInstance } from 'axios';
import type { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import type {
  AnyAction,
  CombinedState,
  DeepPartial,
  MiddlewareArray,
  Reducer,
  ReducersMapObject,
  ThunkMiddleware,
} from '@reduxjs/toolkit';

import type { ArticleState, CommentsState } from 'pages/article';
import type { ArticlesState } from 'pages/articles';
import type { AuthState } from 'features/auth';
import type { CounterState } from 'entities/counter';
import type { ProfileState } from 'features/edit-profile';

import type { createAppStore } from './create-store';

export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
export type AppState = AppStateLazy & {
  auth: AuthState;
};

export type AppStateLazy = Partial<{
  article: ArticleState;
  articles: ArticlesState;
  comments: CommentsState;
  counter: CounterState;
  profile: ProfileState;
}>;

export type AppStateLazyKey = keyof AppStateLazy;
export type AppReducersLazy = {
  [key in AppStateLazyKey]?: Reducer;
};

export interface AppStore
  extends ToolkitStore<
    AppState,
    AnyAction,
    MiddlewareArray<[ThunkMiddleware<AppState, AnyAction, ThunkExtra>]>
  > {
  reducerManager?: ReducerManager;
}

export interface AppStoreParams {
  lazyReducers?: AppReducersLazy;
  preloadedState?: AppStatePreloaded;
}

export type AppStatePreloaded = DeepPartial<AppState>;

export interface ReducerManager {
  add: (key: AppStateLazyKey, reducer: Reducer) => void;
  getReducerMap: () => ReducersMapObject<AppState>;
  reduce: (state: AppState, action: AnyAction) => CombinedState<AppState>;
  remove: (key: AppStateLazyKey) => void;
}

export interface StoreProviderProps {
  children: ReactNode;
  lazyReducers?: AppReducersLazy;
}

export interface ThunkConfig {
  extra: ThunkExtra;
  rejectValue: string;
  state: AppState;
}

export interface ThunkExtra {
  client: AxiosInstance;
}
