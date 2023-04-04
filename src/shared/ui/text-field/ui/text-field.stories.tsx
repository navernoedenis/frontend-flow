import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import TextField from './text-field';

export default {
  title: 'shared/TextField',
  component: TextField,
  args: {
    error: '',
    isFocused: false,
    title: '',
    value: 'My custom value',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
