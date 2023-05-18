import { Toaster } from 'react-hot-toast';
import type { Meta, StoryObj } from '@storybook/react';
import { AppStatePreloaded } from 'app/providers/store';
import { articleMock, articlesMock } from 'shared/config/tests/mocks/entities';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import ArticlePage from './article';

const preloadedState: AppStatePreloaded = {
  article: { isLoading: false, error: '', data: articleMock },
};

const meta: Meta = {
  title: 'pages/Article',
  decorators: [StoreDecorator(preloadedState)],
  parameters: {
    mockData: [
      {
        url: `${__HOST__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: articlesMock.slice(0, 3),
      },
    ],
  },
  component: () => (
    <>
      <ArticlePage />
      <Toaster />
    </>
  ),
} satisfies Meta<typeof ArticlePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
