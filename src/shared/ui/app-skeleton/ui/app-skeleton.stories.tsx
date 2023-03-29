import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import AppSkeleton from './app-skeleton';

export default {
  title: 'shared/AppSkeleton',
  component: AppSkeleton,
} as ComponentMeta<typeof AppSkeleton>;

const Template: ComponentStory<typeof AppSkeleton> = () => <AppSkeleton />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
