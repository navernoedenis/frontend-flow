import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStatePreloaded } from 'app/providers/store';
import { profileMock } from 'shared/config/tests/mocks/entities';

import ProfileEntity from './profile';
import ProfileSkeleton from './profile.skeleton';

const preloadedState: AppStatePreloaded = {
  profile: { isLoading: false, error: '', data: profileMock },
};

export default {
  title: 'entities/Profile',
  component: ProfileEntity,
  args: {
    isDisabled: true,
  },
} as ComponentMeta<typeof ProfileEntity>;

const Template: ComponentStory<typeof ProfileEntity> = ({
  profile,
  ...otherProps
}) => <ProfileEntity profile={profileMock} {...otherProps} />;

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
