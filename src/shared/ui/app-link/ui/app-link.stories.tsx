import type { Meta, StoryObj } from '@storybook/react';
import AppLink from './app-link';

const meta: Meta = {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'Link',
    isInversed: false,
    isNavLink: false,
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
