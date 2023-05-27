import type { Meta, StoryObj } from '@storybook/react';
import TextField from './text-field';

const meta: Meta = {
  title: 'shared/TextField',
  component: TextField,
  args: {
    error: '',
    isFocused: false,
    title: '',
    value: 'My custom value',
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
