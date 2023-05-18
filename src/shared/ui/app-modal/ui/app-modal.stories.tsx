import { useReducer } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { AppButton } from 'shared/ui/app-button';

import AppModal from './app-modal';

const meta: Meta = {
  title: 'shared/AppModal',
  component: AppModal,
  render: () => {
    const [isOpen, toggleOpen] = useReducer((prev) => !prev, false);

    return (
      <div style={{ display: 'inline-block' }}>
        <AppButton onClick={toggleOpen} size="small">
          Show Modal
        </AppButton>

        <AppModal isOpen={isOpen} onClose={toggleOpen}>
          <h1>App Modal</h1>
        </AppModal>
      </div>
    );
  },
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
