import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
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

export const Small_Light = Template.bind({});
Small_Light.args = { size: 'small' };

export const Small_Dark = Template.bind({});
Small_Dark.args = { size: 'small' };
Small_Dark.decorators = [ThemeDecorator('dark')];

export const Medium_Light = Template.bind({});
export const Medium_Dark = Template.bind({});
Medium_Dark.decorators = [ThemeDecorator('dark')];

export const Large_Light = Template.bind({});
Large_Light.args = { size: 'large' };

export const Large_Dark = Template.bind({});
Large_Dark.args = { size: 'large' };
Large_Dark.decorators = [ThemeDecorator('dark')];

export const Medium_Light_Disabled = Template.bind({});
Medium_Light_Disabled.args = { disabled: true };

export const Medium_Dark_Disabled = Template.bind({});
Medium_Dark_Disabled.args = { disabled: true };
Medium_Dark_Disabled.decorators = [ThemeDecorator('dark')];
