import { Provider } from 'react-redux';
import type { Decorator } from '@storybook/react';

import type {
  AppState,
  AppReducersLazy,
  AppStatePreloaded,
} from '@/app/providers/store';

import { createStore } from '@/app/providers/store';

import { articleReducer, commentsReducer } from '@/pages/article/model/slice';
import { articlesReducer } from '@/pages/articles/model/slice';
import { profileReducer } from '@/features/edit-profile/model/slice';

const lazyReducers: AppReducersLazy = {
  article: articleReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  profile: profileReducer,
};

export const StoreDecorator = (preloadedState: AppStatePreloaded = {}): Decorator => (Story) => {
  const store = createStore({
    lazyReducers,
    preloadedState: preloadedState as AppState,
  });

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
