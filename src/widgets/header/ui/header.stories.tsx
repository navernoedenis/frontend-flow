import { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators';
import Header from './header';

import { authActions } from 'features/auth';
import { useAppDispatch } from 'shared/hooks';

export default {
  title: 'widgets/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authActions.init());
  }, [dispatch]);

  return <Header />;
};

export const Light = Template.bind({});
export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark')];
