import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppButton from './app-button';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  args: {
    children: 'App Button',
    isLoading: false,
    size: 'medium',
  },
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} />
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
