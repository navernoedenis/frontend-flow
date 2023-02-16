import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppLink from './app-link';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
    children: 'Link',
  },
  reactRouter: {
    routePath: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Default = Template.bind({});

export const Navlink = Template.bind({});
Navlink.args = { isNavLink: true };

export const Inversed = Template.bind({});
Inversed.args = { isInversed: true };
Inversed.parameters = {
  backgrounds: {
    default: 'dark',
  },
};
