import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { articleMock } from 'shared/config/tests/mocks/entities';
import ArticleList from './article-list';

const mockArticles = [articleMock, articleMock];

const Wrapper = () => <div className="app-page" />;

const meta: Meta = {
  title: 'entities/ArticleList',
  component: ArticleList,
  args: {
    isCompact: false,
    isLoading: false,
  },
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: (props) => (
    <div className="app-page">
      <ArticleList articles={mockArticles} {...props} />
    </div>
  ),
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
  render: (props) => (
    <div className="app-page">
      <ArticleList articles={mockArticles} {...props} />
    </div>
  ),
};
