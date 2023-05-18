import { Toaster } from 'react-hot-toast';
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { articleMock } from 'shared/config/tests/mocks/entities';

import Article from './article';
import ArticleSkeleton from './article.skeleton';

const meta: Meta = {
  title: 'entities/ArticleEntity',
  component: Article,
  render: () => (
    <>
      <Article article={articleMock} />,
      <Toaster />
    </>
  ),
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const LightSkeleton: Story = {
  render: () => <ArticleSkeleton />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};

export const DarkSkeleton: Story = {
  decorators: [ThemeDecorator('dark')],
  render: () => <ArticleSkeleton />,
};
