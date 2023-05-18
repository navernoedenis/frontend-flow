import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import AppSkeleton from './app-skeleton';

const meta: Meta = {
  title: 'shared/AppSkeleton',
  component: AppSkeleton,
} satisfies Meta<typeof AppSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
