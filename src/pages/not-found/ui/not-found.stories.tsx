import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFound from './not-found';

export default {
  title: 'pages/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = () => <NotFound />;

export const Default = Template.bind({});
