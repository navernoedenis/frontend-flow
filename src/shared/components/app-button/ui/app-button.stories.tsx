import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppButton from './app-button';

export default {
  title: 'shared/AppButton',
  component: AppButton,
  args: {
    children: 'App Button',
    size: 'medium',
  },
} as ComponentMeta<typeof AppButton>;

const Template: ComponentStory<typeof AppButton> = (args) => (
  <AppButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Default = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
