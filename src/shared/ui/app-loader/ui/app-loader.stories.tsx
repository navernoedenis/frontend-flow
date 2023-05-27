import type { Meta, StoryObj } from '@storybook/react';
import AppLoader from './app-loader';

const meta: Meta = {
  title: 'shared/AppLoader',
  component: AppLoader,
} satisfies Meta<typeof AppLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
