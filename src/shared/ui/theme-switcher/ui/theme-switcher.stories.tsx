import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeSwitcher from './theme-switcher';

export default {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {
    isInversed: false,
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <ThemeSwitcher {...args} />
  </div>
);

export const Default = Template.bind({});
