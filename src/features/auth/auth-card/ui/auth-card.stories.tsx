import { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { userActions } from '@/entities/user';
import { useAppDispatch } from '@/shared/hooks/use-store';
import Auth from './auth-card';

const meta: Meta = {
  title: 'features/auth/Auth',
  component: Auth,
  render: () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(userActions.init());
    }, []);

    return <Auth />;
  },
} satisfies Meta<typeof Auth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
