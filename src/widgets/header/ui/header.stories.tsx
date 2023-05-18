import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { authActions } from 'features/auth';
import { useAppDispatch } from 'shared/hooks';

import Header from './header';

const meta: Meta = {
  title: 'widgets/Header',
  component: Header,
  render: () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(authActions.init());
    }, [dispatch]);

    return <Header />;
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
