import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
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

const TemplateDark: ComponentStory<typeof AppLink> = (args) => (
  <div style={{ backgroundColor: 'var(--color-red)' }}>
    <AppLink {...args} />
  </div>
);

export const Link_Light = Template.bind({});

export const Link_Dark = Template.bind({});
Link_Dark.decorators = [ThemeDecorator('dark')];

export const Navlink_Light = Template.bind({});
Navlink_Light.args = { isNavLink: true };

export const Navlink_Dark = Template.bind({});
Navlink_Dark.args = { isNavLink: true };
Navlink_Dark.decorators = [ThemeDecorator('dark')];

export const Link_Inversed = TemplateDark.bind({});
Link_Inversed.args = { isInversed: true };
