import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { commentMock } from 'shared/config/tests/mocks/entities';

import Comment from './comment-entity';
import CommentSkeleton from './comment-entity.skeleton';

const meta: Meta = {
  title: 'entities/Comment',
  component: Comment,
  args: {
    comment: commentMock,
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const LightSkeleton: Story = {
  render: () => <CommentSkeleton />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};

export const DarkSkeleton: Story = {
  decorators: [ThemeDecorator('dark')],
  render: () => <CommentSkeleton />,
};
