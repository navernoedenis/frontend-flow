import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import Error from './error';

const meta: Meta = {
  title: 'pages/Error',
  component: Error,
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
