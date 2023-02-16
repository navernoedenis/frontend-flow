import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from './main';

export default {
  title: 'pages/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = () => <Main />;

export const Default = Template.bind({});
