import { ComponentStory, ComponentMeta } from '@storybook/react';
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

export default {
  title: 'entities/ProfileForm',
  component: ProfileForm,
  args: {
    isDisabled: true,
  },
} as ComponentMeta<typeof ProfileForm>;

const Template: ComponentStory<typeof ProfileForm> = ({
  profile,
  ...otherProps
}) => <ProfileForm profile={profileMock} {...otherProps} />;

const Skeleton: ComponentStory<typeof ProfileSkeleton> = () => (
  <ProfileSkeleton />
);

export const Light = Template.bind({});
export const LightSkeleton = Skeleton.bind({});
Light.decorators = [StoreDecorator(preloadedState)];

export const Dark = Template.bind({});
export const DarkSkeleton = Skeleton.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(preloadedState)];
DarkSkeleton.decorators = [ThemeDecorator('dark')];
