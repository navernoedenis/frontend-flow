import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import {
  I18nDecorator,
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';

import 'app/styles/global.scss';

const preview: Preview = {
  decorators: [
    I18nDecorator,
    StoreDecorator(),
    ThemeDecorator('light'),
    withRouter,
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
