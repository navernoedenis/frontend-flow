import { Toaster } from 'react-hot-toast';
import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from '../../../model/mocks';

import Article from './article';
import ArticleSkeleton from './article.skeleton';

const meta: Meta = {
  title: 'entities/article/ArticleEntity',
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

export const Component: Story = {};

export const Skeleton: Story = {
  render: () => <ArticleSkeleton />,
};
