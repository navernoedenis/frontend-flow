import { Toaster } from 'react-hot-toast';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import AppClipboard from './app-clipboard';

export default {
  title: 'shared/AppClipboard',
  component: AppClipboard,
  args: {
    text: 'Hello world!',
  },
} as ComponentMeta<typeof AppClipboard>;

const Template: ComponentStory<typeof AppClipboard> = (args) => (
  <>
    <AppClipboard {...args} />
    <Toaster />
  </>
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
