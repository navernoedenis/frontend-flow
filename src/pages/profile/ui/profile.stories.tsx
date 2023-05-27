import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from '@/app/providers/store';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import {
  authStateMock,
  profileStateMock,
} from '@/shared/config/jest/mocks/states';

import ProfilePage from './profile';

const preloadedState: AppStatePreloaded = {
  auth: authStateMock,
  networkStatus: { isOnline: true },
  profile: profileStateMock,
};

const meta: Meta = {
  title: 'pages/Profile',
  decorators: [StoreDecorator(preloadedState)],
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};
