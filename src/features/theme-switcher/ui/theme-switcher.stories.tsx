import type { Meta, StoryObj } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';

const meta: Meta = {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {
    isInversed: false,
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {
  render: (props) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ThemeSwitcher {...props} />
    </div>
  ),
};
