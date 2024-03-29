import type { Meta, StoryObj } from '@storybook/react';
import { articlesMock } from '@/entities/article';
import { makeGetRequest } from '@/shared/config/storybook/make-request';

import ArticleRecommended from './articles-recommended';

const meta: Meta = {
  title: 'features/ArticleRecommended',
  component: ArticleRecommended,
  args: {
    quantity: 3,
  },
  parameters: {
    mockData: [makeGetRequest('/articles?_limit=3', articlesMock.slice(0, 3))],
  },
} satisfies Meta<typeof ArticleRecommended>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
