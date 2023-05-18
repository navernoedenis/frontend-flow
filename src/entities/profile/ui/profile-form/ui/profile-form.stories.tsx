import type { Meta, StoryObj } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStatePreloaded } from 'app/providers/store';
import { profileMock } from 'shared/config/tests/mocks/entities';
import { profileStateMock } from 'shared/config/tests/mocks/states';

import ProfileForm from './profile-form';
import ProfileSkeleton from './profile-form.skeleton';

const preloadedState: AppStatePreloaded = {
  profile: profileStateMock,
};

const meta: Meta = {
  title: 'entities/ProfileForm',
  component: ProfileForm,
  decorators: [StoreDecorator(preloadedState)],
  args: {
    isDisabled: true,
    profile: profileMock,
  },
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const LightSkeleton: Story = {
  render: () => <ProfileSkeleton />,
};

export const Dark: Story = {
  decorators: [ThemeDecorator('dark')],
};

export const DarkSkeleton: Story = {
  decorators: [ThemeDecorator('dark')],
  render: () => <ProfileSkeleton />,
};
