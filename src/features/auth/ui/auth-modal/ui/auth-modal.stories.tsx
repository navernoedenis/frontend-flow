import { useEffect, useReducer } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from '@/shared/ui/app-button';
import { useAppDispatch } from '@/shared/hooks/use-store';

import { authActions } from '../../../model/slice';
import AuthModal from './auth-modal';

const meta: Meta = {
  title: 'features/auth/AuthModal',
  component: AuthModal,
  args: {
    isOpen: false,
  },
  render: () => {
    const dispatch = useAppDispatch();
    const [isOpen, toggleOpen] = useReducer((prev) => !prev, false);

    useEffect(() => {
      dispatch(authActions.init());
    }, []);

    return (
      <div>
        <AppButton onClick={toggleOpen} size="small">
          Show Modal
        </AppButton>
        <AuthModal isOpen={isOpen} onClose={toggleOpen} />
      </div>
    );
  },
} satisfies Meta<typeof AuthModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
