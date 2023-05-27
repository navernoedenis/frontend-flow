import type { Meta, StoryObj } from '@storybook/react';
import LanguageSwitcher from './language-switcher';

const meta: Meta = {
  title: 'features/LanguageSwitcher',
  component: LanguageSwitcher,
} satisfies Meta<typeof LanguageSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
