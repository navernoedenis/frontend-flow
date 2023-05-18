import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/decorators';
import { useAppDispatch } from 'shared/hooks/use-store';

import { authActions } from '../../../model/slice';
import Auth from './auth';

const meta: Meta = {
  title: 'features/Auth',
  component: Auth,
  render: () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(authActions.init());
    }, []);

    return <Auth />;
  },
} satisfies Meta<typeof Auth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
