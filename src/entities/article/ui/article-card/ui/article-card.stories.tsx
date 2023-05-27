import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from '@/shared/config/jest/mocks/entities';

import ArticleCard from './article-card';
import ArticleCardSkeleton from './article-card.skeleton';

const meta: Meta = {
  title: 'entities/article/ArticleCard',
  component: ArticleCard,
  args: {
    isCompact: false,
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  args: {
    article: articleMock,
  },
};

export const Skeleton: Story = {
  args: {
    isCompact: false,
  },
  render: (props) => <ArticleCardSkeleton {...props} />,
};
