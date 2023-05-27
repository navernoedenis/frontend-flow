import type { Meta, StoryObj } from '@storybook/react';

import AddComment from './add-comment';

const meta: Meta = {
  title: 'features/AddComment',
  component: AddComment,
  args: {
    onSendComment: () => {},
  },
} satisfies Meta<typeof AddComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
