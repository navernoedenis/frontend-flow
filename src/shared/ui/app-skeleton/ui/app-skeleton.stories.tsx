import type { Meta, StoryObj } from '@storybook/react';

import AppSkeleton from './app-skeleton';

const meta: Meta = {
  title: 'shared/AppSkeleton',
  component: AppSkeleton,
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
