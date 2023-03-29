import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import CounterEntity from './counter';

export default {
  title: 'entities/Counter',
  component: CounterEntity,
} as ComponentMeta<typeof CounterEntity>;

const Template: ComponentStory<typeof CounterEntity> = () => <CounterEntity />;

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
