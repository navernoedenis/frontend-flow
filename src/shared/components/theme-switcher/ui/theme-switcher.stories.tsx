import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Default = Template.bind({});
