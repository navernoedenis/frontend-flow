import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { createAppStore } from 'app/providers/store';
import type {
  AppState,
  AppReducersLazy,
  AppStatePreloaded,
} from 'app/providers/store';

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

export function renderWithStore(
  component: ReactNode,
  preloadedState: AppStatePreloaded = {},
) {
  const store = createAppStore({
    lazyReducers,
    preloadedState: preloadedState as AppState,
  });

  return render(<Provider store={store}>{component}</Provider>);
}
