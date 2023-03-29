import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { articleMock } from 'shared/config/tests/mocks/entities';

import Article from './article';
import ArticleSkeleton from './article.skeleton';

export default {
  title: 'entities/Article',
  component: Article,
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = () => (
  <Article article={articleMock} />
);

const Skeleton: ComponentStory<typeof ArticleSkeleton> = () => (
  <ArticleSkeleton />
);

export const Light = Template.bind({});
export const LightSkeleton = Skeleton.bind({});

export const Dark = Template.bind({});
export const DarkSkeleton = Skeleton.bind({});
Dark.decorators = [ThemeDecorator('dark')];
DarkSkeleton.decorators = [ThemeDecorator('dark')];
