import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { createAppStore } from 'app/providers/store';
import type {
  AppState,
  AppReducersLazy,
  AppStatePreloaded,
} from 'app/providers/store';

import { articleReducer } from 'pages/article';
import { counterReducer } from 'entities/counter';
import { profileReducer } from 'features/edit-profile';

const lazyReducers: AppReducersLazy = {
  article: articleReducer,
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
