import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import AppLink from './app-link';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    children: 'Link',
    isInversed: false,
    isNavLink: false,
  },
  reactRouter: {
    routePath: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = ({ to, ...otherProps }) => (
  <AppLink to="/" {...otherProps} />
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
