import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  ThemeDecorator,
  StoreDecorator,
} from 'shared/config/storybook/decorators';

import { AppStoreParams } from 'app/providers/store';
import { profileReducer } from 'features/edit-profile/model/slice';

import { profileMock } from 'shared/config/tests/mocks/entities';
import ProfileCard from './profile-card';

const params: AppStoreParams = {
  lazyReducers: { profile: profileReducer },
  preloadedState: {
    profile: { isLoading: false, error: '', data: profileMock },
  },
};

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = () => (
  <ProfileCard isDisabled profile={profileMock} />
);

export const Light = Template.bind({});
Light.decorators = [StoreDecorator(params)];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator('dark'), StoreDecorator(params)];
