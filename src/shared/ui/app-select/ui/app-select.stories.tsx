import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppSelect from './app-select';

const meta: Meta = {
  title: 'shared/AppSelect',
  component: AppSelect,
  args: {
    title: '',
    isDisabled: false,
    value: 'item 1',
    options: [
      { title: 'item 1', value: 'item 1' },
      { title: 'item 2', value: 'item 2' },
      { title: 'item 3', value: 'item 3' },
      { title: 'item 4', value: 'item 4' },
    ],
  },
} satisfies Meta<typeof AppSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
