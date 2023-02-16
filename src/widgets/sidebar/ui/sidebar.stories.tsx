import { ComponentStory, ComponentMeta } from '@storybook/react';
import Sidebar from './sidebar';

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = () => (
  <div className="main">
    <Sidebar />
  </div>
);

export const Default = Template.bind({});
