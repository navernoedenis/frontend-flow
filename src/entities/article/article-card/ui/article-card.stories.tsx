import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import ArticleCard from './article-card';
import ArticleCardSkeleton from './article-card.skeleton';

import { articleMock } from 'shared/config/tests/mocks/entities';

export default {
  title: 'entities/ArticleCard',
  component: ArticleCard,
  args: {
    isCompact: false,
  },
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = ({
  article,
  ...otherArgs
}) => <ArticleCard article={articleMock} {...otherArgs} />;

const Skeleton: ComponentStory<typeof ArticleCard> = () => (
  <ArticleCardSkeleton />
);

const SkeletonCompact: ComponentStory<typeof ArticleCard> = () => (
  <ArticleCardSkeleton isCompact />
);

export const Light = Template.bind({});
export const LightSkeleton = Skeleton.bind({});
export const LightSkeletonCompact = SkeletonCompact.bind({});

export const Dark = Template.bind({});
export const DarkSkeleton = Skeleton.bind({});
export const DarkSkeletonCompact = SkeletonCompact.bind({});

Dark.decorators = [ThemeDecorator('dark')];
DarkSkeleton.decorators = [ThemeDecorator('dark')];
DarkSkeletonCompact.decorators = [ThemeDecorator('dark')];
