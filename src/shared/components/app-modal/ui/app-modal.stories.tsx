import { useReducer } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { AppButton } from 'shared/components/app-button';

import AppModal from './app-modal';

export default {
  title: 'shared/AppModal',
  component: AppModal,
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = () => {
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
};

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
