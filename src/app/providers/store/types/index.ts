import type { ReactNode } from 'react';
import type { AxiosInstance } from 'axios';
import type {
  AnyAction,
  CombinedState,
  DeepPartial,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import type { ArticlesState } from '@/pages/articles';
import type { ArticleState, CommentsState } from '@/pages/article';
import type { NetworkStatusState } from '@/widgets/network-status';
import type { ProfileState } from '@/features/edit-profile';
import type { UserState } from '@/entities/user';

import type { rtk } from '@/shared/api';
import type { createStore } from '../create-store';

export interface AppStore extends EnhancedStore<AppState> {
  reducerManager: ReducerManager;
}

export interface AppStoreParams {
  lazyReducers?: AppReducersLazy;
  preloadedState?: AppStatePreloaded;
}

export interface AppStoreProviderProps {
  children: ReactNode;
  lazyReducers?: AppReducersLazy;
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch'];

export type AppState = AppStateLazy & {
  networkStatus: NetworkStatusState;
  user: UserState;
  [rtk.reducerPath]: ReturnType<typeof rtk.reducer>;
};

export type AppStateLazy = Partial<{
  article: ArticleState;
  articles: ArticlesState;
  comments: CommentsState;
  profile: ProfileState;
}>;

export type AppStateLazyKey = keyof AppStateLazy;
export type AppReducersLazy = {
  [key in AppStateLazyKey]?: Reducer;
};

export type AppStatePreloaded = DeepPartial<AppState>;

export interface ReducerManager {
  add: (key: AppStateLazyKey, reducer: Reducer) => void;
  getReducerMap: () => ReducersMapObject<AppState>;
  reduce: (state: AppState, action: AnyAction) => CombinedState<AppState>;
  remove: (key: AppStateLazyKey) => void;
}

export interface ThunkConfig {
  extra: ThunkExtra;
  rejectValue: string;
  state: AppState;
}

export interface ThunkExtra {
  client: AxiosInstance;
}
