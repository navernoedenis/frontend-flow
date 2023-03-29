import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { commentMock } from 'shared/config/tests/mocks/entities';

import Comment from './comment';
import CommentSkeleton from './comment.skeleton';

export default {
  title: 'entities/Comment',
  component: Comment,
  args: {
    comment: commentMock,
  },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

const Skeleton: ComponentStory<typeof CommentSkeleton> = () => (
  <CommentSkeleton />
);

export const Light = Template.bind({});
export const LightSkeleton = Skeleton.bind({});

export const Dark = Template.bind({});
export const DarkSkeleton = Skeleton.bind({});
Dark.decorators = [ThemeDecorator('dark')];
DarkSkeleton.decorators = [ThemeDecorator('dark')];
