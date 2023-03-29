import { Provider } from 'react-redux';
import type { DecoratorFn } from '@storybook/react';

import type {
  AppState,
  AppReducersLazy,
  AppStatePreloaded,
} from 'app/providers/store';

import { createAppStore } from 'app/providers/store';

import { articleReducer } from 'pages/article';
import { counterReducer } from 'entities/counter';
import { profileReducer } from 'features/edit-profile';

const lazyReducers: AppReducersLazy = {
  article: articleReducer,
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
