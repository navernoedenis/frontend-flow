import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import Articles from './articles';

export default {
  title: 'pages/Articles',
  component: Articles,
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = () => <Articles />;

export const Light = Template.bind({});
Light.decorators = [];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
