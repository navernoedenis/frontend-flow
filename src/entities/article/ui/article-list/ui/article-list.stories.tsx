import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from '@/shared/config/jest/mocks/entities';
import ArticleList from './article-list';

const mockArticles = Array.from({ length: 3 }, (_, index) => ({
  ...articleMock,
  id: `${index}`,
}));

const meta: Meta = {
  title: 'entities/article/ArticleList',
  component: ArticleList,
  args: {
    isCompact: false,
    isLoading: false,
  },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: (props) => <ArticleList articles={mockArticles} {...props} />,
};
