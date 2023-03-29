import { ComponentStory, ComponentMeta } from '@storybook/react';
import Aside from './aside';

export default {
  title: 'widgets/Aside',
  component: Aside,
} as ComponentMeta<typeof Aside>;

const Template: ComponentStory<typeof Aside> = () => (
  <main className="app-container main" style={{ padding: 0 }}>
    <Aside />
  </main>
);

export const Default = Template.bind({});
