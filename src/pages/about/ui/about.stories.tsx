import { ComponentStory, ComponentMeta } from '@storybook/react';
import About from './about';

export default {
  title: 'pages/About',
  component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Default = Template.bind({});
