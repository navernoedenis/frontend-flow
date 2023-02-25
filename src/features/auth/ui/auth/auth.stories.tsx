import { useReducer } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { AppButton } from 'shared/components/app-button';

import Auth from './auth';
import AuthModal from '../auth-modal/auth-modal';

export default {
  title: 'features/Auth',
  component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = () => <Auth />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];

const ModalTemplate: ComponentStory<typeof AuthModal> = () => {
  const [isOpen, toggleOpen] = useReducer((prev) => !prev, false);

  return (
    <div>
      <AppButton onClick={toggleOpen} size="small">
        Show Modal
      </AppButton>

      <AuthModal isOpen={isOpen} onClose={toggleOpen} />
    </div>
  );
};

export const ModalLight = ModalTemplate.bind({});
export const ModalDark = ModalTemplate.bind({});
ModalDark.decorators = [ThemeDecorator('dark')];
