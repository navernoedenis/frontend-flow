import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from '@/app/providers/store';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import { profileStateMock } from '@/features/edit-profile';
import { userStateMock } from '@/entities/user';

import ProfilePage from './profile';

const preloadedState: AppStatePreloaded = {
  networkStatus: { isOnline: true },
  profile: profileStateMock,
  user: userStateMock,
};

const meta: Meta = {
  title: 'pages/Profile',
  decorators: [StoreDecorator(preloadedState)],
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
