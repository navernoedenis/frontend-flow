import { Provider } from 'react-redux';
import type { DecoratorFn } from '@storybook/react';

import type {
  AppState,
  AppReducersLazy,
  AppStatePreloaded,
} from 'app/providers/store';

import { createAppStore } from 'app/providers/store';

import { articleReducer, commentsReducer } from 'pages/article/model/slice';
import { articlesReducer } from 'pages/articles/model/slice';
import { counterReducer } from 'entities/counter/model/slice';
import { profileReducer } from 'features/edit-profile/model/slice';

const lazyReducers: AppReducersLazy = {
  article: articleReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  counter: counterReducer,
  profile: profileReducer,
};

export const StoreDecorator = (preloadedState: AppStatePreloaded = {}): DecoratorFn => (Story) => {
  const store = createAppStore({
    lazyReducers,
    preloadedState: preloadedState as AppState,
  });

  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
