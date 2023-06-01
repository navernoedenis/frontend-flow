import type { Meta, StoryObj } from '@storybook/react';
import { articleMock } from '../../../model/mocks';
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
