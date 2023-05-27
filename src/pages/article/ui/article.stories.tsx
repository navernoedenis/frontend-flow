import { Toaster } from 'react-hot-toast';
import type { Meta, StoryObj } from '@storybook/react';

import { AppStatePreloaded } from '@/app/providers/store';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { makeGetRequest } from '@/shared/config/storybook/utils';
import { articleMock, articlesMock } from '@/shared/config/jest/mocks/entities';

import ArticlePage from './article';

const preloadedState: AppStatePreloaded = {
  article: {
    isLoading: false,
    error: '',
    data: articleMock,
  },
};

const meta: Meta = {
  title: 'pages/Article',
  decorators: [StoreDecorator(preloadedState)],
  parameters: {
    mockData: [makeGetRequest('/articles?_limit=3', articlesMock.slice(0, 3))],
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

export const Component: Story = {};
