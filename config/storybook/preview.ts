import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import {
  I18nDecorator,
  StoreDecorator,
} from '@/shared/config/storybook/decorators';

import 'app/styles/global.scss';

const preview: Preview = {
  decorators: [I18nDecorator, StoreDecorator(), withRouter],
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    paddings: {
      values: [
        { name: 'small', value: '16px' },
        { name: 'medium', value: '32px' },
        { name: 'large', value: '64px' },
      ],
      default: 'small',
    },
    rootAttributes: [
      {
        root: 'html',
        attribute: 'theme',
        defaultState: {
          name: 'light',
          value: 'light',
        },
        states: [
          {
            name: 'dark',
            value: 'dark',
          },
        ],
      },
    ],
    rootAttributesTooltip: true,
  },
};

export default preview;
