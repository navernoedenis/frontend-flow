import type { Meta, StoryObj } from '@storybook/react';
import NotFound from './not-found';

const meta: Meta = {
  title: 'pages/NotFound',
  component: NotFound,
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
