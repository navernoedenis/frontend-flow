import type { Meta, StoryObj } from '@storybook/react';
import { makeGetRequest } from '@/shared/config/storybook/make-request';
import { articleRatingMock } from '../model/mocks';

import ArticleRating from './article-rating';

const meta: Meta = {
  title: 'features/ArticleRating',
  component: ArticleRating,
  args: {
    articleId: '1',
    userId: '1',
  },
  parameters: {
    mockData: [
      makeGetRequest(
        '/articles-rating?articleId=1&userId=1',
        articleRatingMock,
      ),
    ],
  },
} satisfies Meta<typeof ArticleRating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
