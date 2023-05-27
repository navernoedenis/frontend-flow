import type { Meta, StoryObj } from '@storybook/react';

import AdminPage from './admin';

const meta: Meta = {
  title: 'pages/AdminPage',
  component: AdminPage,
} satisfies Meta<typeof AdminPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
