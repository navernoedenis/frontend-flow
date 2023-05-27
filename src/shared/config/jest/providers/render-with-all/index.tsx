import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { render } from '@testing-library/react';

import { createStore } from '@/app/providers/store';
import type {
  AppState,
  AppStatePreloaded,
  AppReducersLazy,
} from '@/app/providers/store';

import { articleReducer, commentsReducer } from '@/pages/article/model/slice';
import { articlesReducer } from '@/pages/articles/model/slice';
import { profileReducer } from '@/features/edit-profile/model/slice';

import i18n from '@/shared/config/i18n/i18n.config-test';

const lazyReducers: AppReducersLazy = {
  article: articleReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  profile: profileReducer,
};

export function renderWithAll(
  component: ReactNode,
  preloadedState: AppStatePreloaded = {},
) {
  const store = createStore({
    lazyReducers,
    preloadedState: preloadedState as AppState,
  });

  return render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter>{component}</MemoryRouter>
      </I18nextProvider>
    </Provider>,
  );
}
