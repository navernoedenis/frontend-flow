import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from '@/app/providers/store';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import {
  authStateMock,
  profileStateMock,
} from '@/shared/config/jest/mocks/states';

import EditProfile from './edit-profile';

const preloadedState: AppStatePreloaded = {
  auth: authStateMock,
  profile: profileStateMock,
};

const meta: Meta = {
  title: 'features/EditProfile',
  decorators: [StoreDecorator(preloadedState)],
  component: EditProfile,
} satisfies Meta<typeof EditProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
