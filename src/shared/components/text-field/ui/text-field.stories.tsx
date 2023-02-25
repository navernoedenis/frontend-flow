import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import TextField from './text-field';

export default {
  title: 'shared/TextField',
  component: TextField,
  args: {
    title: 'Storybook',
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Light = Template.bind({});
export const Light_Error = Template.bind({});
Light_Error.args = { error: 'Error...' };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];

export const Dark_Error = Template.bind({});
Dark_Error.args = { error: 'Error...' };
Dark_Error.decorators = [ThemeDecorator('dark')];
