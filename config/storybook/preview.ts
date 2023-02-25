import { addDecorator } from '@storybook/react';
import type { DecoratorFn, Parameters } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import {
  I18nDecorator,
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';

import 'app/styles/global.scss';

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators: DecoratorFn[] = [withRouter];

addDecorator(StoreDecorator);
addDecorator(I18nDecorator);
addDecorator(ThemeDecorator('light'));
