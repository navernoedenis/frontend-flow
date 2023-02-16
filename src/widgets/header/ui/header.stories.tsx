import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './header';

export default {
  title: 'widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
