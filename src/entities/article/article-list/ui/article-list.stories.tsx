import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { articleMock } from 'shared/config/tests/mocks/entities';

import ArticleList from './article-list';

export default {
  title: 'entities/ArticleList',
  component: ArticleList,
  args: {
    isCompact: false,
    isLoading: false,
  },
} as ComponentMeta<typeof ArticleList>;

const mockArticles = [articleMock, articleMock];

const Template: ComponentStory<typeof ArticleList> = ({
  articles,
  ...otherProps
}) => <ArticleList articles={mockArticles} {...otherProps} />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];