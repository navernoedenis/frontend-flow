import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppLoader from './app-loader';

export default {
  title: 'shared/AppLoader',
  component: AppLoader,
} as ComponentMeta<typeof AppLoader>;

const Template: ComponentStory<typeof AppLoader> = () => <AppLoader />;

export const Default = Template.bind({});
Default.args = {};
