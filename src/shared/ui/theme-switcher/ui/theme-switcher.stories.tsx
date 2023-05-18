import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import ThemeSwitcher from './theme-switcher';

const meta: Meta = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {
    isInversed: false,
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  render: (props) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ThemeSwitcher {...props} />
    </div>
  ),
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
  render: (props) => (
    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <ThemeSwitcher {...props} />
    </div>
  ),
};
