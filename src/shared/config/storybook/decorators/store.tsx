import { Provider } from 'react-redux';
import type { DecoratorFn } from '@storybook/react';
import { rootStore } from 'app/providers/store';

export const StoreDecorator: DecoratorFn = (Story) => (
  <Provider store={rootStore}>
    <Story />
  </Provider>
);
