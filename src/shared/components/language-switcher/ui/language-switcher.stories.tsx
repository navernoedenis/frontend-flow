import { ComponentStory, ComponentMeta } from '@storybook/react';
import LanguageSwitcher from './language-switcher';

export default {
  title: 'shared/LanguageSwitcher',
  component: LanguageSwitcher,
} as ComponentMeta<typeof LanguageSwitcher>;

const Template: ComponentStory<typeof LanguageSwitcher> = (args) => (
  <div style={{ display: 'flex' }}>
    <LanguageSwitcher {...args} />
  </div>
);

export const Default = Template.bind({});
