import type { Meta, StoryObj } from '@storybook/react';
import PageLoader from './page-loader';

const meta: Meta = {
  title: 'shared/PageLoader',
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
