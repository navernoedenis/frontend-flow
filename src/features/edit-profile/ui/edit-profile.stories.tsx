import type { Meta, StoryObj } from '@storybook/react';
import type { AppStatePreloaded } from 'app/providers/store';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import {
  authStateMock,
  profileStateMock,
} from 'shared/config/tests/mocks/states';

import EditProfile from './edit-profile';

const preloadedState: AppStatePreloaded = {
  auth: authStateMock,
  profile: profileStateMock,
};

const meta: Meta = {
  title: 'features/EditProfile',
  decorators: [StoreDecorator(preloadedState)],
  component: EditProfile,
  args: {
    showEditableButtons: false,
  },
} satisfies Meta<typeof EditProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};
