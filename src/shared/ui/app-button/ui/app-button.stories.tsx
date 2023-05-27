import type { Meta, StoryObj } from '@storybook/react';
import AppButton from './app-button';

const meta: Meta = {
  title: 'shared/AppButton',
  component: AppButton,
  args: {
    children: 'App Button',
    isLoading: false,
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof AppButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
