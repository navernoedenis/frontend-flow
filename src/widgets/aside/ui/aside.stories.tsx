import type { Meta, StoryObj } from '@storybook/react';
import Aside from './aside';

const meta: Meta = {
  title: 'widgets/Aside',
  component: Aside,
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
