import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppLoader from './app-loader';

export default {
  title: 'shared/AppLoader',
  component: AppLoader,
} as ComponentMeta<typeof AppLoader>;

const Template: ComponentStory<typeof AppLoader> = () => <AppLoader />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
