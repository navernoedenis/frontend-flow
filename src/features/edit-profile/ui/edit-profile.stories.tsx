import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from '@/app/providers/store';

import { profileStateMock } from '@/features/edit-profile';
import { userStateMock } from '@/entities/user';

import { StoreDecorator } from '@/shared/config/storybook/decorators';

import EditProfile from './edit-profile';

const preloadedState: AppStatePreloaded = {
  profile: profileStateMock,
  user: userStateMock,
};

const meta: Meta = {
  title: 'features/EditProfile',
  decorators: [StoreDecorator(preloadedState)],
  component: EditProfile,
} satisfies Meta<typeof EditProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
