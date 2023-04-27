import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import Flebox from './flexbox';

export default {
  title: 'shared/Flebox',
  component: Flebox,
  args: {
    alignItems: 'center',
    noShrink: false,
    tag: 'div',
    wrap: false,
  },
} as ComponentMeta<typeof Flebox>;

const Template: ComponentStory<typeof Flebox> = (args) => (
  <div>
    <Flebox style={{ border: '2px dashed #66BB6A', height: '197px' }} {...args}>
      {Array.from({ length: 4 }, (_, index) => (
        <div style={{ border: '2px dashed #DCE775', padding: '5px' }}>
          {index + 1}
        </div>
      ))}
    </Flebox>
  </div>
);

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
