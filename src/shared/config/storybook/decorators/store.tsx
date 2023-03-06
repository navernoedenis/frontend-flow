import { Provider } from 'react-redux';
import { createAppStore } from 'app/providers/store';
import type { DecoratorFn } from '@storybook/react';
import type { AppState, AppStoreParams } from 'app/providers/store';

export const StoreDecorator = (params: AppStoreParams = {}): DecoratorFn => (Story) => {
  const { lazyReducers = {}, preloadedState = {} } = params;

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
