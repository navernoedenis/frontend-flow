import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators';

import { AppStatePreloaded } from '@/app/providers/store';
import { profileStateMock } from '@/features/edit-profile';

import { profileMock } from '../../../model/mocks';
import ProfileForm from './profile-form';
import ProfileSkeleton from './profile-form.skeleton';

const preloadedState: AppStatePreloaded = {
  profile: profileStateMock,
};

const meta: Meta = {
  title: 'entities/profile/ProfileForm',
  component: ProfileForm,
  decorators: [StoreDecorator(preloadedState)],
  args: {
    isDisabled: true,
    profile: profileMock,
  },
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Component: Story = {};

export const Skeleton: Story = {
  render: () => <ProfileSkeleton />,
};
