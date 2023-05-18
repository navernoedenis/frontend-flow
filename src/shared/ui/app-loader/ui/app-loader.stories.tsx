import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppLoader from './app-loader';

const meta: Meta = {
  title: 'shared/AppLoader',
  component: AppLoader,
} satisfies Meta<typeof AppLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
