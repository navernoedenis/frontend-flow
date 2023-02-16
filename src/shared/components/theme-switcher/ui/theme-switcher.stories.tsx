import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <div
    style={{ display: 'inline-block', backgroundColor: 'var(--primary-color)' }}
  >
    <ThemeSwitcher {...args} />
  </div>
);

export const Default = Template.bind({});
