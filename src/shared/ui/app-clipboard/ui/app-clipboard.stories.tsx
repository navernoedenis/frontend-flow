import { Toaster } from 'react-hot-toast';
import type { Meta, StoryObj } from '@storybook/react';

import AppClipboard from './app-clipboard';

const meta: Meta = {
  title: 'shared/AppClipboard',
  component: AppClipboard,
  render: () => (
    <>
      <AppClipboard text="Hello world" />
      <Toaster />
    </>
  ),
} satisfies Meta<typeof AppClipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
