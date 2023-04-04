import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';

import AddComment from './add-comment';

export default {
  title: 'features/AddComment',
  component: AddComment,
} as ComponentMeta<typeof AddComment>;

const Template: ComponentStory<typeof AddComment> = () => (
  <AddComment onSendComment={() => {}} />
);

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
