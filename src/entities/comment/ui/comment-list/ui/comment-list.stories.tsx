import type { Meta, StoryObj } from '@storybook/react';
import { commentsMock } from '@/shared/config/jest/mocks/entities';

import CommentList from './comment-list';

const meta: Meta = {
  title: 'entities/comment/CommentList',
  component: CommentList,
  args: {
    isLoading: false,
    comments: commentsMock,
  },
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
