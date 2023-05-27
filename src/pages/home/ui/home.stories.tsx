import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './home';

const meta: Meta = {
  title: 'pages/Home',
  component: HomePage,
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
