import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from 'app/providers/store';

import {
  authStateMock,
  profileStateMock,
} from 'shared/config/tests/mocks/states';

import {
  StoreDecorator,
  ThemeDecorator,
} from 'shared/config/storybook/decorators';
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

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
