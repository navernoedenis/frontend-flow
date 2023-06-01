import type { Meta, StoryObj } from '@storybook/react';
import { commentMock } from '../../../model/mocks';

import Comment from './comment-entity';
import CommentSkeleton from './comment-entity.skeleton';

const meta: Meta = {
  title: 'entities/comment/CommentEntity',
  component: Comment,
  args: {
    comment: commentMock,
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Skeleton: Story = {
  args: {
    repeat: 1,
  },
  render: (props) => <CommentSkeleton {...props} />,
};
