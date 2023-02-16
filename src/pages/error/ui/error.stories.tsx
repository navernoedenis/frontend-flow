import { ComponentStory, ComponentMeta } from '@storybook/react';
import Error from './error';

export default {
  title: 'pages/Error',
  component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = () => <Error />;

export const Default = Template.bind({});
