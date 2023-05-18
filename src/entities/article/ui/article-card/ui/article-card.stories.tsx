import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import ArticleCard from './article-card';
import ArticleCardSkeleton from './article-card.skeleton';

import { articleMock } from 'shared/config/tests/mocks/entities';

const meta: Meta = {
  title: 'entities/ArticleCard',
  component: ArticleCard,
  args: {
    isCompact: false,
  },
} satisfies Meta<typeof ArticleCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    article: articleMock,
  },
};

export const LightSkeleton: Story = {
  args: {
    isCompact: false,
  },
  render: (props) => <ArticleCardSkeleton {...props} />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    article: articleMock,
  },
};

export const DarkSkeleton: Story = {
  decorators: [ThemeDecorator('dark')],
  args: {
    isCompact: false,
  },
  render: (props) => <ArticleCardSkeleton {...props} />,
};
